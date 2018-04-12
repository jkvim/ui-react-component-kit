** Usage **

```javascript static
    import { InputText } from 'ui-react-component-kit'
```

** States **

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <InputText
        id={'working-input-text'}
        label={'Sample Input Text'}
        placeholder={'Enter Text'}
        hint={'Sample hint'}
        value={state.value}
        errorMessage={state.errorMessage}
        onBlur={(value) => {
            setState({errorMessage: value ? '' : 'Field Required'});
        }}
        onChange={(value) => {
            setState({value, errorMessage: ''})
        }}
    />
```

```jsx
    initialState = {
        value: 'Sample Input'
    };
  
    <InputText
        id={'disabled-input-text'}
        label={'Disabled Input Text'}   
        hint={'Sample hint'}
        value={state.value}
        onChange={(value) => {
            setState({value});
        }}
        disabled={true}
    />
```

