** Usage **

```javascript static
    import { AddressAutoComplete } from 'ui-react-component-kit'
```

NOTE: To be fully functional this component requires a server to handle requests and responses, to see this working example, please run the styleguide locally via:
```bash static
    yarn styleguide:with-mock-server | npm run styleguide:with-mock-server
``` 
This will run a local server that the component can communicate with for demonstration.

** States **

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
      
    <AddressAutoComplete
        id={'unselected-address-autocomplete'}
        label={'Sample Address Autocomplete'}
        hint={'Sample hint'}
        placeholder={'Enter an address'}
        errorMessage={state.errorMessage}
        endpoint={'http://localhost:8882/addresses'}
        selectedItem={state.selectedItem}
        onBlur={(isItemSelected) => {
            setState({errorMessage: isItemSelected ? '' : 'Field Required'});
        }}
        onChange={(selectedItem) => {
            setState({selectedItem, errorMessage: ''});
        }}
    />
```

```jsx
    initialState = {
        selectedItem: {
            value: '123 Champion Street Dubbo NSW 2830',
            object: {name: 'reference object'}
        }
    };
  
    <AddressAutoComplete
        id={'disabled-address-autocomplete'}
        label={'Disabled Address Autocomplete'}
        hint={'Sample hint'}
        endpoint={'http://localhost:8882/addresses'}
        selectedItem={state.selectedItem}
        onChange={(selectedItem) => {
            setState({selectedItem});
        }}
        disabled={true}
    />
```