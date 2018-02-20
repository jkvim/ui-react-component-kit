import { filter } from 'lodash';
import { DataProvider, ParsedSelectedItem, SelectableItem } from '../autocomplete';

class StaticDataProvider implements DataProvider {

  suggestions: Array<string|object>;
  valuePath: string;

  constructor (suggestions: Array<string|object>, valuePath?: string) {
    this.suggestions = suggestions || [];
    this.valuePath = valuePath;
  }

  filter (searchTerm: string, callback: (filteredResult: Array<SelectableItem>) => void) {

    let filteredResult = [];

    this.suggestions.forEach((suggestion) => {
      let matchValue = suggestion;
      if (this.valuePath) {
        matchValue = suggestion[this.valuePath];
      }
      if ((matchValue as string).toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
        filteredResult.push({
          value: suggestion,
          object: suggestion
        });
      }
    });
    callback(filteredResult);
  }

  /**
   * Parse the selected item.  This gets put into the text field.
   * This is useful if you want to do further transformation of the selected item.
   *
   * @param selectedItem
   * @returns String
   */
  parseSelectedItem (selectedItem: SelectableItem, callback: (parsedSelectedItem: ParsedSelectedItem) => void): void {
    callback({
      value: selectedItem.value,
      item: selectedItem.object
    });
  }
}

export default StaticDataProvider;
