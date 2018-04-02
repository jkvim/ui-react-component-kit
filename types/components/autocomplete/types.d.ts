/// <reference types="react" />
import { SyntheticEvent } from 'react';
export interface DataProvider {
    /**
     * Filters the array of raw suggestions base on the searchTerm.
     *
     * @param {string} searchTerm
     * @returns {Array<string | object>}
     */
    filter(searchTerm: string, callback: (filteredResult: Array<SelectableItem>) => void): void;
    /**
     * Parses a SelectableItem into ParsedSelectedItem.
     * Primary purpose is for datasources like AddressLookUp where an extra call needs to be made to the micro service
     * when the user selects item.
     *
     * @param {string | SelectableItem} selectedItem
     * @returns {ParsedSelectedItem}
     */
    parseSelectedItem(selectedItem: SelectableItem, callback: (parsedItem: ParsedSelectedItem) => void): void;
}
/**
 * Normalized Suggestions.  This is the type that the suggestion list in the UI is built from.
 */
export interface SelectableItem {
    value: string;
    object: object;
}
/**
 * When the user selects an item of SelectableItem, the SelectableItem is parsed into ParsedSelectedItem.
 */
export interface ParsedSelectedItem {
    value: string;
    item: object;
}
export interface FooterComponent {
    component: JSX.Element;
    onClick: (e: SyntheticEvent<any>) => void;
    displayValue?: string;
}
