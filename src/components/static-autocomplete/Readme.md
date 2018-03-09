Blank

```jsx
    initialState = {};
  
    <StaticAutoComplete
        id={'blank-static-autocomplete'}
        label={'Blank Static Autocomplete'}
        value={state.value}
        suggestions={['apple', 'banana', 'mango', 'pineapple', 'oranges']}
        onChange={(value) => {
            setState({value});
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
        value={state.value}
        suggestions={['apple', 'banana', 'mango', 'pineapple', 'oranges']}
        onChange={(value) => {
            setState({value});
        }}
        selectedItem={state.selectedItem}
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
        value={state.value}
        suggestions={['apple', 'banana', 'mango', 'pineapple', 'oranges']}
        onChange={(value) => {
            setState({value});
        }}
        selectedItem={state.selectedItem}
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
        value={state.value}
        errorMessage={state.errorMessage}
        suggestions={['apple', 'banana', 'mango', 'pineapple', 'oranges']}
        onBlur={(value) => {
            setState({errorMessage: value ? '' : 'Field Required'});
        }}
        onChange={(value) => {
            setState({value, errorMessage: ''});
        }}
        selectedItem={state.selectedItem}
    />
```