import { DataProvider, ParsedSelectedItem, SelectableItem } from '../autocomplete';
declare class StaticDataProvider implements DataProvider {
    suggestions: Array<string | object>;
    valuePath: string;
    constructor(suggestions: Array<string | object>, valuePath?: string);
    filter(searchTerm: string, callback: (filteredResult: Array<SelectableItem>) => void): void;
    /**
     * Parse the selected item.  This gets put into the text field.
     * This is useful if you want to do further transformation of the selected item.
     *
     * @param selectedItem
     * @returns String
     */
    parseSelectedItem(selectedItem: SelectableItem, callback: (parsedSelectedItem: ParsedSelectedItem) => void): void;
}
export default StaticDataProvider;
