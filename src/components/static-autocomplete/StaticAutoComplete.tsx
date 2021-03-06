import * as React from 'react';
import { noop } from 'lodash';
import { DataProvider, ParsedSelectedItem } from '../autocomplete';
import { AutoComplete } from '../autocomplete';
import StaticDataProvider from './StaticDataProvider';

export interface StaticAutoCompleteProps {
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
  onBlur?: (isItemSelected?: boolean) => void;
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
    const {id, selectedItem, className, label, hint, placeholder,
      errorMessage, onChange = noop, onBlur = noop, disabled} = this.props;

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
        onBlur={onBlur}
        onChange={onChange}
      />
    );
  }
}

export default StaticAutoComplete;
