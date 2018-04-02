/// <reference types="react" />
import * as React from 'react';
import { DataProvider, ParsedSelectedItem } from '../autocomplete';
export interface StaticAutoCompleteProps {
    id: string;
    label: string;
    suggestions: Array<string | object>;
    hint?: string;
    placeholder?: string;
    valuePath?: string;
    errorMessage?: string;
    className?: string;
    disabled?: boolean;
    selectedItem?: ParsedSelectedItem;
    onBlur?: (obj?: ParsedSelectedItem) => void;
    onChange?: (obj?: ParsedSelectedItem) => void;
}
declare class StaticAutoComplete extends React.Component<StaticAutoCompleteProps, {}> {
    dataProvider: DataProvider;
    constructor(props: StaticAutoCompleteProps);
    render(): JSX.Element;
}
export default StaticAutoComplete;
