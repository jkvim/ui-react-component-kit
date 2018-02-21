import * as React from 'react';
import { DataProvider, ParsedSelectedItem } from '../autocomplete';
import { AutoComplete } from '../autocomplete';
import StaticDataProvider from './StaticDataProvider';

interface StaticAutoCompleteProps {
  label: string;
  hint?: string;
  prefix: string;
  suggestions: Array<string|object>;
  valuePath?: string;
  selectedItem?: ParsedSelectedItem;
  onChange?: (obj?: ParsedSelectedItem) => void;
  error?: string;
}

class StaticAutoComplete extends React.Component<StaticAutoCompleteProps, {}> {

  dataProvider: DataProvider;

  constructor(props: StaticAutoCompleteProps) {
    super(props);
    this.dataProvider =
      new StaticDataProvider(this.props.suggestions, this.props.valuePath);
  }

  render() {
    const {selectedItem, onChange, label, hint, error} = this.props;

    return(
      <AutoComplete
        label={label}
        hint={hint}
        dataProvider={this.dataProvider}
        prefix={this.props.prefix}
        selectedItem={selectedItem}
        onChange={onChange}
        error={error}
      />
    );
  }
}

export default StaticAutoComplete;
