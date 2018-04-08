/// <reference types="react" />
import * as React from 'react';
import { DataProvider, FooterComponent, ParsedSelectedItem, SelectableItem } from './types';
export interface AutoCompleteProps {
    id: string;
    dataProvider: DataProvider;
    label?: string;
    hint?: string;
    placeholder?: string;
    minSearchLength?: number;
    errorMessage?: string;
    className?: string;
    disabled?: boolean;
    selectedItem?: ParsedSelectedItem;
    onBlur?: (isItemSelected?: boolean) => void;
    onChange?: (obj?: ParsedSelectedItem) => void;
    suggestionFooter?: FooterComponent;
    focusOnMount?: boolean;
}
export interface AutoCompleteState {
    showSuggestions: boolean;
    suggestions: Array<SelectableItem>;
    searchTerm: string;
    isItemSelected: boolean;
    selectedIndex: number;
}
export interface NextIndex {
    index: number;
    isFooter: boolean;
}
declare class AutoComplete extends React.Component<AutoCompleteProps, AutoCompleteState> {
    debouncedGetSuggestions: any;
    inputRef: HTMLInputElement;
    constructor(props: AutoCompleteProps);
    componentDidMount(): void;
    getSuggestions(): void;
    setInputRef(ref: HTMLInputElement): void;
    handleChange(value: string): void;
    handleBlur(): void;
    handleKeyDownInput(keyCode: number, e: React.KeyboardEvent<HTMLInputElement>): void;
    handleItemSelect(value: SelectableItem, e: React.SyntheticEvent<HTMLElement>): void;
    handleTabDown(value: SelectableItem): void;
    selectSuggestion(value: SelectableItem): void;
    moveToSuggestion(e: React.KeyboardEvent<HTMLElement>, movingDown: boolean): void;
    getNextIndexSuggestion(movingDown: boolean): NextIndex;
    buildSuggestionFooter(): JSX.Element;
    highlightSuggestion(suggestion: string): JSX.Element;
    buildSuggestions(): any;
    render(): JSX.Element;
}
export default AutoComplete;
