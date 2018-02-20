import axios from 'axios';
import { DataProvider, ParsedSelectedItem, SelectableItem } from '../input-autocomplete';

class AddressDataProvider implements DataProvider {

  endpoint: string;
  limit: number;
  headers: object;

  constructor (endpoint: string, limit: number = 10) {
    this.endpoint = endpoint;
    this.limit = limit;
    this.headers = {
      'Accept': 'application/json'
    };
  }

  /**
   * Calls the search address end point.
   *
   * Invokes the callback with the result parsed as an array of Selectable items.
   *
   */
  async filter (searchTerm: string, callback: (filteredResult: Array<SelectableItem>) => void) {
    let parsedResult;
    try {
      const url = `${this.endpoint}`;

      const response = await axios.get(url, { headers: this.headers });
      // TODO: filter map by limit
      parsedResult = response.data.data.map((matchedResult) => (
        {
          value: matchedResult.address,
          object: matchedResult
        }
      ));
    } catch (e) {
      parsedResult = [];
    }
    callback(parsedResult);
  }

  /**
   * Fetch the specific address using the id.
   *
   * @param selectedItem
   * @Return String
   */
  async parseSelectedItem (selectedItem: SelectableItem, callback: (parsedSelectedItem: ParsedSelectedItem) => void) {
    let parsedItem;

    try {
      // tslint:disable no-any
      const url = `${this.endpoint}/${(selectedItem.object as any).id}`;
      // tslint:enable no-any
      const response = await axios.get(url, { headers: this.headers });
      parsedItem = {
        value: response.data.data.address,
        item: response.data
      };
    } catch (e) {
      parsedItem = {
        value: '',
        item: null
      };
    }
    callback(parsedItem);
  }
}

export default AddressDataProvider;
