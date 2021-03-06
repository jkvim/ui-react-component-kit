import * as React from 'react';
import { noop } from 'lodash';
import { AutoComplete, FooterComponent, ParsedSelectedItem } from '../autocomplete';
import AddressDataProvider from './AddressDataProvider';

export interface AddressAutoCompleteProps {
  id: string;
  label: string;
  endpoint: string;
  limit?: number;
  hint?: string;
  placeholder?: string;
  className?: string;
  focusOnMount?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  selectedItem?: ParsedSelectedItem;
  onChange?: (isItemSelected?: boolean) => void;
  onBlur?: (obj?: ParsedSelectedItem) => void;
  suggestionFooter?: FooterComponent;
}

class AddressAutoComplete extends React.Component<AddressAutoCompleteProps, {}> {

  dataProvider: AddressDataProvider;

  constructor(props: AddressAutoCompleteProps) {
    super(props);
    this.dataProvider = new AddressDataProvider(
      props.endpoint,
      props.limit
    );
  }

  render() {
    const {id, label, hint, placeholder, className, disabled, selectedItem,
      errorMessage, suggestionFooter, onChange = noop, onBlur = noop, focusOnMount} = this.props;

    return(
      <AutoComplete
        id={id}
        label={label}
        dataProvider={this.dataProvider}
        hint={hint}
        placeholder={placeholder}
        errorMessage={errorMessage}
        className={className}
        disabled={disabled}
        minSearchLength={6}
        focusOnMount={focusOnMount}
        selectedItem={selectedItem}
        onBlur={onBlur}
        onChange={onChange}
        suggestionFooter={suggestionFooter}
      />
    );
  }
}

export default AddressAutoComplete;
