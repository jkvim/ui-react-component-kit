** Usage **

```javascript static
    import { InputRadioGroup } from 'ui-react-component-kit'
```

** States **

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <InputRadioGroup
        id={'unchecked-single-radio'}
        name={'unchecked-single'}
        hint={'Select the radio'}
        value={state.value}
        options={[{label: 'One', value: '1'}]}
        errorMessage={state.errorMessage}
        onChange={(value) => { 
            setState({value, errorMessage: value ? '' : 'Field Required'});
        }}
	/>
```

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <InputRadioGroup
        id={'unchecked-multiple-radio'}
        name={'unchecked-multiple'}
        hint={'Select the radio'}
        value={state.value}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        errorMessage={state.errorMessage}
        onChange={(value) => {
            setState({value, errorMessage: value ? '' : 'Field Required'});
        }}
	/>
```

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <InputRadioGroup
        id={'unchecked-multiple-v-radio'}
        name={'unchecked-v-multiple'}
        hint={'Select the radio'}
        value={state.value}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        alignment={'vertical'}
        errorMessage={state.errorMessage}
        onChange={(value) => {
            setState({value, errorMessage: value ? '' : 'Field Required'});
        }}
	/>
```

```jsx
    initialState = {
        value: '1'
    };
  
    <InputRadioGroup
        id={'disabled-single-radio'}
        name={'disabled-single'}
        value={state.value}
        options={[{label: 'One', value: '1'}]}
        onChange={(value) => {
            setState({value});
        }}
        disabled={true}
	/>
```

```jsx
    initialState = {
        value: '2'
    };
  
    <InputRadioGroup
        id={'disabled-multiple-radio'}
        name={'disabled-multiple'}
        value={state.value}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={(value) => {
            setState({value});
        }}
        disabled={true}
	/>
```

```jsx
    initialState = {
        value: '2'
    };
  
    <InputRadioGroup
        id={'disabled-multiple-v-radio'}
        name={'disabled-v-multiple'}
        value={state.value}
        alignment={'vertical'}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={(value) => {
            setState({value});
        }}
        disabled={true}
	/>
```
