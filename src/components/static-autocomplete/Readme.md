** Usage **

```javascript static
    import { StaticAutoComplete } from 'ui-react-component-kit'
```

** States **

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
      
    <StaticAutoComplete
        id={'unselected-static-autocomplete'}
        label={'Sample Static Autocomplete'}
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