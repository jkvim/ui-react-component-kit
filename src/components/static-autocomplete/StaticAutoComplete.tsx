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
  onBlur?: (obj?: ParsedSelectedItem) => void;
  onChange?: (obj?: ParsedSelectedItem) => void;
  errorMessage?: string;
  className?: string;
}

class StaticAutoComplete extends React.Component<StaticAutoCompleteProps, {}> {

  dataProvider: DataProvider;

  constructor(props: StaticAutoCompleteProps) {
    super(props);
    this.dataProvider =
      new StaticDataProvider(this.props.suggestions, this.props.valuePath);
  }

  render() {
    const {selectedItem, onChange, onBlur, label, hint, errorMessage, className} = this.props;

    return(
      <AutoComplete
        label={label}
        hint={hint}
        dataProvider={this.dataProvider}
        prefix={this.props.prefix}
        selectedItem={selectedItem}
        onBlur={onBlur}
        onChange={onChange}
        errorMessage={errorMessage}
        className={className}
      />
    );
  }
}

export default StaticAutoComplete;
