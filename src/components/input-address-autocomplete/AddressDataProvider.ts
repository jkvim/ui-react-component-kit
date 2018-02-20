import axios from 'axios';
import { DataProvider, ParsedSelectedItem, SelectableItem } from '../input-autocomplete';

class AddressDataProvider implements DataProvider {

  endpoint: string;
  limit: number;
  headers: object;
  acceptedAddressType: string;

  constructor (endpoint: string, apiKey: string, acceptedAddressType: string, limit: number = 10) {
    this.endpoint = endpoint;
    this.limit = limit;
    this.acceptedAddressType = acceptedAddressType;
    this.headers = {
      'AUTH-KEY': apiKey,
      'Accept': 'application/json'
    };
  }

  /**
   * Calls the search address end point in Address Look up micro service.
   *
   * Invokes the callback with the result parsed as an array of Selectable items.
   *
   */
  async filter (searchTerm: string, callback: (filteredResult: Array<SelectableItem>) => void) {
    let parsedResult;
    try {
      const term = searchTerm.replace(/\s/g, '+');

      // tslint:disable-next-line:max-line-length
      const url = `${this.endpoint}/address-lookup/v1/addresses?type=${this.acceptedAddressType}&limit=${this.limit}&query=${term}`;

      const response = await axios.get(url, { headers: this.headers });
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
   * Fetch the specific address using the DPID and format the address.
   *
   * @param selectedItem
   * @Return String
   */
  async parseSelectedItem (selectedItem: SelectableItem, callback: (parsedSelectedItem: ParsedSelectedItem) => void) {
    let parsedItem;

    try {
      // tslint:disable no-any
      const url = `${this.endpoint}/address-lookup/v1/addresses/${(selectedItem.object as any).dpid}/detail`;
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
