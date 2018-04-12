** Usage **

```javascript static
    import { InputCheckboxGroup } from 'ui-react-component-kit'
```

** States **

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <InputCheckboxGroup
        id={'unchecked-single-checkbox'}
        name={'unchecked-single'}
        hint={'Select the checkbox'}
        values={state.values}
        options={[{label: 'One', value: '1'}]}
        errorMessage={state.errorMessage}
        onChange={values => {
            setState({values, errorMessage: values.length === 0 ? 'Field Required' : ''});
        }}
	/>
```

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <InputCheckboxGroup
        id={'unchecked-multiple-checkbox'}
        name={'unchecked-multiple'}
        hint={'Select the checkboxes'}
        values={state.values}
        breakpoint={'md'}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        errorMessage={state.errorMessage}
        onChange={values => {
            setState({values, errorMessage: values.length === 0 ? 'Field Required' : ''});
        }}
	/>
```

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <InputCheckboxGroup
        id={'unchecked-v-multiple-checkbox'}
        name={'unchecked-v-multiple'}
        hint={'Select the checkboxes'}
        values={state.values}
        breakpoint={'md'}
        alignment={'vertical'}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        errorMessage={state.errorMessage}
        onChange={values => {
            setState({values, errorMessage: values.length === 0 ? 'Field Required' : ''});
        }}
	/>
```

```jsx
    initialState = {
        values: ['1']
    };
  
    <InputCheckboxGroup
        id={'disabled-single-checkbox'}
        name={'disabled-single'}
        values={state.values}
        options={[{label: 'One', value: '1'}]}
        onChange={values => {
            setState({values});
        }}
        disabled={true}
	/>
```

```jsx
    initialState = {
        values: ['2', '3']
    };
  
    <InputCheckboxGroup
        id={'disabled-multiple-checkbox'}
        name={'disabled-multiple'}
        values={state.values}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={values => {
            setState({values});
        }}
        disabled={true}
	/>
```

```jsx
    initialState = {
        values: ['2', '3']
    };
  
    <InputCheckboxGroup
        id={'disabled-v-multiple-checkbox'}
        name={'disabled-v-multiple'}
        values={state.values}
        alignment={'vertical'}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={values => {
            setState({values});
        }}
        disabled={true}
	/>
```