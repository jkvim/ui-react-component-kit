Blank

```jsx
    initialState = {};
  
    <StaticAutoComplete
        id={'blank-static-autocomplete'}
        label={'Blank Static Autocomplete'}
        suggestions={['apple', 'banana', 'mango', 'pineapple', 'oranges']}
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
            value: 'mango',
            object: {name: 'reference object'}
        }
    };
  
    <StaticAutoComplete
        id={'pre-populated-static-autocomplete'}
        label={'Pre-populated Static Autocomplete'}
        suggestions={['apple', 'banana', 'mango', 'pineapple', 'oranges']}
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
            value: 'mango',
            object: {name: 'reference object'}
        }
    };
  
    <StaticAutoComplete
        id={'disabled-static-autocomplete'}
        label={'Disabled Static Autocomplete'}
        suggestions={['apple', 'banana', 'mango', 'pineapple', 'oranges']}
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
      
    <StaticAutoComplete
        id={'error-static-autocomplete'}
        label={'Error Static Autocomplete'}
        hint={'Sample hint'}
        placeholder={'Enter a fruit'}
        errorMessage={state.errorMessage}
        suggestions={['apple', 'banana', 'mango', 'pineapple', 'oranges']}
        selectedItem={state.selectedItem}
        onBlur={(selectedItem) => {
            setState({errorMessage: selectedItem ? '' : 'Field Required'});
        }}
        onChange={(selectedItem) => {
            setState({selectedItem, errorMessage: ''});
        }}
    />
```