import { CSSProperties, ChangeEvent, Component, ReactNode, createElement } from "react";
import classNames from "classnames";
import { MentionsInput, Mention, SuggestionDataItem } from 'react-mentions';
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
        
        if (this.props.mentionsList != null) {
            const trigger = this.props.mentionsList[0].trigger;
            const dataSource = this.props.mentionsList[0].objectsDatasource;
            const displayAttribute = this.props.mentionsList[0].displayAttribute;
            let suggestedItems: SuggestionDataItem[] = [];

            dataSource.items?.forEach(item => {
                suggestedItems.push({
                    id: item.id,
                    display: displayAttribute.get(item).displayValue
                });
            });
            
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
                <Mention
                    trigger={trigger}
                    data={suggestedItems}
                    displayTransform={(_id, display) => `${trigger}${display}`}
                    markup='@[__display__]'
                    appendSpaceOnAdd={true} />
            </MentionsInput>;

            return mentionsInputNode;
        }
        else {
            return <input
            id={this.props.id}
            type="textarea"
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
            placeholder={this.props.placeholder}
        />;
        }
    }

    private getCurrentValue(): string {
        return this.state.editedValue !== undefined
            ? this.state.editedValue
            : this.props.value;
    }

    private onChange(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({ editedValue: event.target.value });
    }

    private onBlur(): void {
        const inputValue = this.props.value;
        const currentValue = this.getCurrentValue();
        if (this.props.onLeave) {
            this.props.onLeave(currentValue, currentValue !== inputValue);
        }
        this.setState({ editedValue: undefined });
    }
}
