import { CSSProperties, ChangeEvent, Component, ReactNode, createElement, ReactElement } from "react";
import classNames from "classnames";
import { MentionsInput, Mention, SuggestionDataItem, MentionItem } from "react-mentions";
import { InputTypeEnum, MentionsType } from "typings/TextBoxWithMentionsProps";
import { Option, ObjectItem } from "mendix";

export interface InputProps {
    id?: string;
    value: string;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    placeholder?: string;
    inputType: InputTypeEnum;
    hasError?: boolean;
    required?: boolean;
    disabled?: boolean;
    onLeave?: (value: string, changed: boolean) => void;
    mentionsList?: MentionsType[]; // Mentions list not specified for preview of widget in studio pro
    appendSpaceOnAdd?: boolean;
}

interface InputState {
    editedValue?: string;
}

export class TextBoxWithMentionsInput extends Component<InputProps> {
    private readonly onChangeHandle = this.onChange.bind(this);
    private readonly onBlurHandle = this.onBlur.bind(this);
    readonly state: InputState = { editedValue: undefined };
    componentDidUpdate(prevProps: InputProps): void {
        if (this.props.value !== prevProps.value) {
            this.setState({ editedValue: undefined });
        }
    }
    render(): ReactNode {
        return this.renderMentionsInput();
    }

    private renderMentionsInput(): ReactNode {
        const className = classNames("mentions", this.props.className);
        const labelledby = `${this.props.id}-label` + (this.props.hasError ? ` ${this.props.id}-error` : "");
        const allowSpaceInQuery = true;
        const allowSuggestionsAboveCursor = true;
        const mentionsInputNode: ReactNode = (
            <MentionsInput
                id={this.props.id}
                className={className}
                style={this.props.style}
                value={this.getCurrentValue()}
                tabIndex={this.props.tabIndex}
                onChange={this.onChangeHandle}
                disabled={this.props.disabled}
                onBlur={this.onBlurHandle}
                aria-labelledby={labelledby}
                aria-invalid={this.props.hasError}
                aria-required={this.props.required}
                allowSpaceInQuery={allowSpaceInQuery}
                allowSuggestionsAboveCursor={allowSuggestionsAboveCursor}
                placeholder={this.props.placeholder}
                singleLine={this.props.inputType === "textBox"}
            >
                {this.generateMentions()}
            </MentionsInput>
        );

        return mentionsInputNode;
    }

    private getCurrentValue(): string {
        return this.state.editedValue !== undefined ? this.state.editedValue : this.props.value;
    }

    private onChange(
        event: ChangeEvent<HTMLInputElement>,
        _newValue: string,
        _newPlainTextValue: string,
        _mentions: MentionItem[]
    ): void {
        this.setState({ editedValue: event.target.value });
        // Remove any objects from reference sets that have been deleted from text
        this.props.mentionsList?.forEach(mentionItem => {
            const association = mentionItem.ref;
            const referenceSet = association.value?.flat();
            const updatedSet: Option<ObjectItem[]> = [];
            referenceSet?.forEach(refValue => {
                const mentionedRefValue = _mentions.find(mentionedItem => {
                    return mentionedItem.id === refValue.id;
                });
                if (mentionedRefValue != null) {
                    updatedSet?.push(refValue);
                }
            });
            association.setValue(updatedSet);
        });
    }

    private onBlur(): void {
        const inputValue = this.props.value;
        const currentValue = this.getCurrentValue();
        if (this.props.onLeave) {
            this.props.onLeave(currentValue, currentValue !== inputValue);
        }
        this.setState({ editedValue: undefined });
    }

    private generateMentions(): ReactElement[] {
        const renderedMentions: ReactElement[] = [];

        this.props.mentionsList?.forEach(mentionItem => {
            const trigger = mentionItem.trigger;
            const association = mentionItem.ref;
            const dataSource = mentionItem.objectsDatasource;
            const displayAttribute = mentionItem.displayAttribute;
            const appendSpaceOnAdd = this.props.appendSpaceOnAdd;
            const className = classNames("mentions__mention", mentionItem.classes);

            const suggestedItems: SuggestionDataItem[] = [];

            dataSource.items?.forEach(item => {
                suggestedItems.push({
                    id: item.id,
                    display: displayAttribute.get(item).displayValue
                });
            });

            const renderedMention = (
                <Mention
                    trigger={trigger}
                    data={suggestedItems}
                    className={className}
                    displayTransform={(_id, display) => `${trigger}${display}`}
                    markup={`${trigger}[__display__](__id__)`}
                    onAdd={id => {
                        const newObject = dataSource.items?.find(item => item.id === id);
                        if (newObject !== undefined) {
                            const referenceSet = association.value?.flat();
                            referenceSet?.push(newObject);
                            association.setValue(referenceSet);
                        }
                    }}
                    appendSpaceOnAdd={appendSpaceOnAdd}
                />
            );

            renderedMentions.push(renderedMention);
        });
        return renderedMentions;
    }
}
