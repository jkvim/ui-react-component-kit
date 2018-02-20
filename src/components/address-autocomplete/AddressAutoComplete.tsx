import * as React from 'react';
import { AutoComplete, FooterComponent, ParsedSelectedItem } from '../autocomplete';
import AddressDataProvider from './AddressDataProvider';

interface AddressAutoCompleteProps {
  prefix: string;
  selectedItem?: ParsedSelectedItem;
  limit?: number;
  onChange?: (obj?: ParsedSelectedItem) => void;
  onBlur?: () => void;
  error?: string;
  suggestionFooter?: FooterComponent;
  hint?: string;
  focusOnMount?: boolean;
  endpoint: string;
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
    const {prefix, selectedItem, onChange, error, suggestionFooter, hint, onBlur, focusOnMount} = this.props;

    return(
      <AutoComplete
        dataProvider={this.dataProvider}
        prefix={prefix}
        selectedItem={selectedItem}
        onChange={onChange}
        error={error}
        minSearchLength={6}
        suggestionFooter={suggestionFooter}
        hint={hint}
        onBlur={onBlur}
        focusOnMount={focusOnMount}
      />
    );
  }
}

export default AddressAutoComplete;
