import { CSSProperties, ChangeEvent, Component, ReactNode, createElement, ReactElement } from "react";
import classNames from "classnames";
import { MentionsInput, Mention, SuggestionDataItem, MentionProps, MentionItem } from 'react-mentions';
import { MentionsType } from "typings/TextBoxWithMentionsProps";


export interface InputProps {
    id?: string;
    value: string;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    placeholder?: string;
    hasError?: boolean;
    required?: boolean;
    disabled?: boolean;
    onLeave?: (value: string, changed: boolean) => void;
    mentionsList?: MentionsType[]; //Mentions list not specified for preview of widget in studio pro
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
        const className = classNames("form-control", this.props.className);
        const labelledby = `${this.props.id}-label` 
        + (this.props.hasError ? ` ${this.props.id}-error` : "");           
        let mentionsInputNode: ReactNode = <MentionsInput
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
            allowSpaceInQuery={true}
            allowSuggestionsAboveCursor={true}
            placeholder={this.props.placeholder}
        >
            {this.generateMentions()}
        </MentionsInput>;

        return mentionsInputNode;
    }

    private getCurrentValue(): string {
        return this.state.editedValue !== undefined
            ? this.state.editedValue
            : this.props.value;
    }

    private onChange(event: ChangeEvent<HTMLInputElement>, _newValue: string, _newPlainTextValue: string, _mentions: MentionItem[]): void {
        this.setState({ editedValue: event.target.value });
        // TODO: Remove any objects from reference sets that have been deleted from text });
    }

    private onBlur(): void {
        const inputValue = this.props.value;
        const currentValue = this.getCurrentValue();
        if (this.props.onLeave) {
            this.props.onLeave(currentValue, currentValue !== inputValue);
        }
        this.setState({ editedValue: undefined });
    }

    private generateMentions() : ReactElement<MentionProps>[] {
        let renderedMentions: ReactElement<MentionProps>[] = [];

        this.props.mentionsList?.forEach( mentionItem => {
            const trigger = mentionItem.trigger;
            const association = mentionItem.ref;
            const dataSource = mentionItem.objectsDatasource;
            const displayAttribute = mentionItem.displayAttribute;

            let suggestedItems: SuggestionDataItem[] = [];

            dataSource.items?.forEach(item => {
                suggestedItems.push({
                    id: item.id,
                    display: displayAttribute.get(item).displayValue
                });
            });

            const renderedMention =  <Mention
            trigger={trigger}
            data={suggestedItems}
            displayTransform={(_id, display) => `${trigger}${display}`}
            markup={`${trigger}__display__`}
            onAdd={(id) => {
                debugger; 
                let newObject = dataSource.items?.find( item => item.id == id);
                if (newObject != undefined){
                    let referenceSet= association.value?.flat();
                    referenceSet?.push(newObject);
                    association.setValue(referenceSet)
                }}}
            appendSpaceOnAdd={true} />;

            renderedMentions.push(renderedMention);
        })
        return renderedMentions;
    }
}
