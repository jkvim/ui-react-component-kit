import { DataProvider, ParsedSelectedItem, SelectableItem } from '../autocomplete';
declare class AddressDataProvider implements DataProvider {
    endpoint: string;
    limit: number;
    headers: object;
    constructor(endpoint: string, limit?: number);
    /**
     * Calls the search address end point.
     *
     * Invokes the callback with the result parsed as an array of Selectable items.
     *
     */
    filter(searchTerm: string, callback: (filteredResult: Array<SelectableItem>) => void): Promise<void>;
    /**
     * Fetch the specific address using the id.
     *
     * @param selectedItem
     * @Return String
     */
    parseSelectedItem(selectedItem: SelectableItem, callback: (parsedSelectedItem: ParsedSelectedItem) => void): Promise<void>;
}
export default AddressDataProvider;
