/**
 * This file was generated from TextBoxWithMentions.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ActionValue, EditableValue, ListValue, ListAttributeValue, ReferenceSetValue } from "mendix";

export type InputTypeEnum = "textArea" | "textBox";

export interface MentionsType {
    trigger: string;
    ref: ReferenceSetValue;
    objectsDatasource: ListValue;
    displayAttribute: ListAttributeValue<string>;
    classes: string;
}

export interface MentionsPreviewType {
    trigger: string;
    ref: string;
    objectsDatasource: {} | { caption: string } | { type: string } | null;
    displayAttribute: string;
    classes: string;
}

export interface TextBoxWithMentionsContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    textAttribute: EditableValue<string>;
    placeholder: string;
    inputType: InputTypeEnum;
    mentions: MentionsType[];
    appendSpaceOnAdd: boolean;
    onChangeAction?: ActionValue;
}

export interface TextBoxWithMentionsPreviewProps {
    readOnly: boolean;
    textAttribute: string;
    placeholder: string;
    inputType: InputTypeEnum;
    mentions: MentionsPreviewType[];
    appendSpaceOnAdd: boolean;
    onChangeAction: {} | null;
}
