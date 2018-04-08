/// <reference types="react" />
import * as React from 'react';
import { FooterComponent, ParsedSelectedItem } from '../autocomplete';
import AddressDataProvider from './AddressDataProvider';
export interface AddressAutoCompleteProps {
    id: string;
    label: string;
    endpoint: string;
    limit?: number;
    hint?: string;
    placeholder?: string;
    className?: string;
    focusOnMount?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    selectedItem?: ParsedSelectedItem;
    onChange?: (isItemSelected?: boolean) => void;
    onBlur?: (obj?: ParsedSelectedItem) => void;
    suggestionFooter?: FooterComponent;
}
declare class AddressAutoComplete extends React.Component<AddressAutoCompleteProps, {}> {
    dataProvider: AddressDataProvider;
    constructor(props: AddressAutoCompleteProps);
    render(): JSX.Element;
}
export default AddressAutoComplete;
