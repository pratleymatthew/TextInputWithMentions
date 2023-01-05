/**
 * This file was generated from TextBoxWithMentions.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ActionValue, EditableValue, ListValue, ListAttributeValue, ReferenceSetValue } from "mendix";

export interface MentionsType {
    trigger: string;
    ref: ReferenceSetValue;
    objectsDatasource: ListValue;
    displayAttribute: ListAttributeValue<string>;
}

export interface MentionsPreviewType {
    trigger: string;
    ref: string;
    objectsDatasource: {} | { type: string } | null;
    displayAttribute: string;
}

export interface TextBoxWithMentionsContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    textAttribute: EditableValue<string>;
    placeholder: string;
    mentions: MentionsType[];
    onChangeAction?: ActionValue;
}

export interface TextBoxWithMentionsPreviewProps {
    readOnly: boolean;
    textAttribute: string;
    placeholder: string;
    mentions: MentionsPreviewType[];
    onChangeAction: {} | null;
}
