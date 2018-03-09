Blank

```jsx
    initialState = {};
  
    <InputText
        id={'blank-input-text'}
        label={'Blank Input Text'}
        placeholder={'Enter Text'}
        value={state.value}
        onChange={(value) => {
            setState({value});
        }}
	/>
```

Pre-populated

```jsx
    initialState = {
        value: 'Sample Input'
    };
  
    <InputText
        id={'pre-populated-input-text'}
        label={'Pre-populated Input Text'}
        placeholder={'Enter Text'}
        value={state.value}
        onChange={(value) => {
            setState({value});
        }}
    />
```

Disabled

```jsx
    initialState = {
        value: 'Sample Input'
    };
  
    <InputText
        id={'disabled-input-text'}
        label={'Disabled Input Text'}
        value={state.value}
        onChange={(value) => {
            setState({value});
        }}
        disabled={true}
    />
```

Error

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <InputText
        id={'error-input-text'}
        label={'Error Input Text'}
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