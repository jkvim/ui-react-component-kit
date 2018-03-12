Blank

```jsx
    initialState = {};
  
    <AddressAutoComplete
        id={'blank-address-autocomplete'}
        label={'Blank Address Autocomplete'}
        endpoint={'http://localhost:8882/addresses'}
        selectedItem={state.selectedItem}
        onChange={(selectedItem) => {
            setState({selectedItem});
        }}
	/>
```

Pre-populated

```jsx
    initialState = {
        selectedItem: {
            value: '123 Champion Street Dubbo NSW 2830',
            object: {name: 'reference object'}
        }
    };
  
    <AddressAutoComplete
        id={'pre-populated-address-autocomplete'}
        label={'Pre-populated Address Autocomplete'}
        endpoint={'http://localhost:8882/addresses'}
        selectedItem={state.selectedItem}
        onChange={(selectedItem) => {
            setState({selectedItem});
        }}
    />
```

Disabled

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

Error

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
      
    <AddressAutoComplete
        id={'error-address-autocomplete'}
        label={'Error Address Autocomplete'}
        hint={'Sample hint'}
        placeholder={'Enter an address'}
        errorMessage={state.errorMessage}
        endpoint={'http://localhost:8882/addresses'}
        selectedItem={state.selectedItem}
        onBlur={(selectedItem) => {
            setState({errorMessage: selectedItem ? '' : 'Field Required'});
        }}
        onChange={(selectedItem) => {
            setState({selectedItem, errorMessage: ''});
        }}
    />
```