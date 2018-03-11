import * as React from 'react';
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
  onChange?: (obj?: ParsedSelectedItem) => void;
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
    const {id, label, className, disabled, selectedItem, onChange,
      errorMessage, suggestionFooter, hint, placeholder, onBlur, focusOnMount} = this.props;

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
        onBlur={event => onBlur(selectedItem)}
        selectedItem={selectedItem}
        onChange={onChange}
        suggestionFooter={suggestionFooter}
      />
    );
  }
}

export default AddressAutoComplete;
