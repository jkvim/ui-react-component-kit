** Usage **

```javascript static
    import { StaticAutoComplete } from 'ui-react-component-kit'
```

** Blank **

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

```jsx
    initialState = {};
  
    <StaticAutoComplete
        id={'blank-static-object-autocomplete'}
        label={'Blank Static Object Autocomplete'}
        suggestions={[{display: 'apple', value: 'a'}, {display: 'banana', value: 'b'}, {display: 'mango', value: 'm'}]}
        valuePath={'display'}
        selectedItem={state.selectedItem}
        onChange={(selectedItem) => {
            setState({selectedItem});
        }}
	/>
```

** Pre-populated **

```jsx
    initialState = {
        selectedItem: {
            value: 'mango',
            object: 'mango'
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

```jsx
    initialState = {
       selectedItem: {
           value: 'banana',
           object: {display: 'banana', value: 'b'}
       }
    };
  
    <StaticAutoComplete
        id={'pre-populated-static-object-autocomplete'}
        label={'Pre-populated Static Object Autocomplete'}
        suggestions={[{display: 'apple', value: 'a'}, {display: 'banana', value: 'b'}, {display: 'mango', value: 'm'}]}
        valuePath={'display'}
        selectedItem={state.selectedItem}
        onChange={(selectedItem) => {
            setState({selectedItem});
        }}
	/>
```

** Disabled **

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
        hint={'Sample hint'}
        suggestions={['apple', 'banana', 'mango', 'pineapple', 'oranges']}
        selectedItem={state.selectedItem}
        onChange={(selectedItem) => {
            setState({selectedItem});
        }}
        disabled={true}
    />
```

** Error **

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
        onBlur={(isItemSelected) => {
            setState({errorMessage: isItemSelected ? '' : 'Field Required'});
        }}
        onChange={(selectedItem) => {
            setState({selectedItem, errorMessage: ''});
        }}
    />
```