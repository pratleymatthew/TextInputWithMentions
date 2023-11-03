import { Component, ReactNode, createElement, Fragment } from "react";
import { Alert } from "./components/Alert";

import { TextBoxWithMentionsContainerProps } from "../typings/TextBoxWithMentionsProps";
import { TextBoxWithMentionsInput } from "./components/TextBoxWithMentionsInput";

import "./ui/TextBoxWithMentions.css";

export class TextBoxWithMentions extends Component<TextBoxWithMentionsContainerProps> {
    private readonly onLeaveHandle = this.onLeave.bind(this);
    render(): ReactNode {
        const value = this.props.textAttribute.value || "";
        const validationFeedback = this.props.textAttribute.validation;
        return (
            <Fragment>
                <TextBoxWithMentionsInput
                    id={this.props.id}
                    value={value}
                    tabIndex={this.props.tabIndex}
                    disabled={this.props.textAttribute.readOnly}
                    onLeave={this.onLeaveHandle}
                    hasError={!!validationFeedback}
                    mentionsList={this.props.mentions}
                    placeholder={this.props.placeholder}
                    inputType={this.props.inputType}
                />
                <Alert>{validationFeedback}</Alert>
            </Fragment>
        );
    }
    private onLeave(value: string, isChanged: boolean): void {
        if (!isChanged) {
            return;
        }
        this.props.textAttribute.setValue(value);
        if (this.props.onChangeAction !== undefined) {
            this.props.onChangeAction.execute();
        }
    }
}
