import * as React from 'react';
import { DataProvider, ParsedSelectedItem } from '../autocomplete';
import { AutoComplete } from '../autocomplete';
import StaticDataProvider from './StaticDataProvider';

interface StaticAutoCompleteProps {
  id: string;
  label: string;
  suggestions: Array<string|object>;
  hint?: string;
  placeholder?: string;
  valuePath?: string;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
  selectedItem?: ParsedSelectedItem;
  onBlur?: (obj?: ParsedSelectedItem) => void;
  onChange?: (obj?: ParsedSelectedItem) => void;
}

class StaticAutoComplete extends React.Component<StaticAutoCompleteProps, {}> {

  dataProvider: DataProvider;

  constructor(props: StaticAutoCompleteProps) {
    super(props);
    this.dataProvider =
      new StaticDataProvider(this.props.suggestions, this.props.valuePath);
  }

  render() {
    const {id, selectedItem, onChange, onBlur, label, hint, placeholder,
      errorMessage, className, disabled} = this.props;

    return(
      <AutoComplete
        id={id}
        label={label}
        hint={hint}
        placeholder={placeholder}
        dataProvider={this.dataProvider}
        errorMessage={errorMessage}
        className={className}
        disabled={disabled}
        selectedItem={selectedItem}
        onBlur={event => onBlur(selectedItem)}
        onChange={onChange}
      />
    );
  }
}

export default StaticAutoComplete;
