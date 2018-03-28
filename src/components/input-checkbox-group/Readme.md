Single
----

Blank 

```jsx
    initialState = {};
  
    <InputCheckboxGroup
        id={'blank-single-checkbox'}
        name={'blank-single'}
        values={state.values}
        options={[{label: 'One', value: '1'}]}
        onChange={values => {
            setState({values});
        }}
	/>
```

Pre-populated

```jsx
    initialState = {
        values: ['1']
    };
  
    <InputCheckboxGroup
        id={'pre-populated-single-checkbox'}
        name={'pre-populated-single'}
        values={state.values}
        options={[{label: 'One', value: '1'}]}
        onChange={values => {
            setState({values});
        }}
	/>
```

Disabled

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

Error

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <InputCheckboxGroup
        id={'error-single-checkbox'}
        name={'error-single'}
        values={state.values}
        options={[{label: 'One', value: '1'}]}
        hint={'Select the checkbox'}
        errorMessage={state.errorMessage}
        onChange={values => {
            setState({values, errorMessage: values.length === 0 ? 'Field Required' : ''});
        }}
	/>
```

Multiple
-----

Blank 

```jsx
    initialState = {};
  
    <InputCheckboxGroup
        id={'blank-multiple-checkbox'}
        name={'blank-multiple'}
        values={state.values}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={values => {
            setState({values});
        }}
	/>
```

```jsx
    initialState = {};
  
    <InputCheckboxGroup
        id={'blank-multiple-v-checkbox'}
        name={'blank-v-multiple'}
        values={state.values}
        alignment={'vertical'}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={values => {
            setState({values});
        }}
	/>
```

Breakpoint

```jsx
    initialState = {
        values: ['2', '3']
    };
  
    <InputCheckboxGroup
        id={'breakpoint-multiple-checkbox'}
        name={'breakpoint-multiple'}
        values={state.values}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        breakpoint={'md'}
        onChange={values => {
            setState({values});
        }}
	/>
```

```jsx
    initialState = {
        values: ['2', '3']
    };
  
    <InputCheckboxGroup
        id={'breakpoint-v-multiple-checkbox'}
        name={'breakpoint-v-multiple'}
        values={state.values}
        alignment={'vertical'}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        breakpoint={'md'}
        onChange={values => {
            setState({values});
        }}
	/>
```

Pre-populated

```jsx
    initialState = {
        values: ['2', '3']
    };
  
    <InputCheckboxGroup
        id={'pre-populated-multiple-checkbox'}
        name={'pre-populated-multiple'}
        values={state.values}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={values => {
            setState({values});
        }}
	/>
```

```jsx
    initialState = {
        values: ['2', '3']
    };
  
    <InputCheckboxGroup
        id={'pre-populated-v-multiple-checkbox'}
        name={'pre-populated-v-multiple'}
        values={state.values}
        alignment={'vertical'}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={values => {
            setState({values});
        }}
	/>
```

Disabled

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

Error

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <InputCheckboxGroup
        id={'error-multiple-checkbox'}
        name={'error-multiple'}
        values={state.values}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        hint={'Select the checkbox'}
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
        id={'error-v-multiple-checkbox'}
        name={'error-v-multiple'}
        values={state.values}
        alignment={'vertical'}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        hint={'Select the checkbox'}
        errorMessage={state.errorMessage}
        onChange={values => {
            setState({values, errorMessage: values.length === 0 ? 'Field Required' : ''});
        }}
	/>
```