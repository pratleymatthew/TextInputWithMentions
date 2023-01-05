import { Component, ReactNode, createElement } from "react";
import { TextBoxWithMentionsInput } from "./components/TextBoxWithMentionsInput";
import { TextBoxWithMentionsPreviewProps } from "../typings/TextBoxWithMentionsProps";

export class preview extends Component<TextBoxWithMentionsPreviewProps> {
    render(): ReactNode {
        const value = `[${this.props.textAttribute}]`;
        return <TextBoxWithMentionsInput value={value} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/TextBoxWithMentions.css");
}
