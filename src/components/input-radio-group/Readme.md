Single
------

Blank 

```jsx
    initialState = {};
  
    <InputRadioGroup
        id={'blank-single-radio'}
        name={'blank-single'}
        value={state.value}
        options={[{label: 'One', value: '1'}]}
        onChange={(value) => {
            setState({value});
        }}
	/>
```

Pre-populated

```jsx
    initialState = {
        value: '1'
    };
  
    <InputRadioGroup
        id={'pre-populated-single-radio'}
        name={'pre-populated-single'}
        value={state.value}
        options={[{label: 'One', value: '1'}]}
        onChange={(value) => {
            setState({value});
        }}
	/>
```

Disabled

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

Error

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <InputRadioGroup
        id={'error-single-radio'}
        name={'error-single'}
        value={state.value}
        options={[{label: 'One', value: '1'}]}
        hint={'Select the checkbox'}
        errorMessage={state.errorMessage}
        onChange={(value) => { 
            setState({value, errorMessage: value ? '' : 'Field Required'});
        }}
	/>
```

Multiple
--------

Blank 

```jsx
    initialState = {};
  
    <InputRadioGroup
        id={'blank-multiple-radio'}
        name={'blank-multiple'}
        value={state.value}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={(value) => {
            setState({value});
        }}
	/>
```

```jsx
    initialState = {};
  
    <InputRadioGroup
        id={'blank-multiple-v-radio'}
        name={'blank-v-multiple'}
        value={state.value}
        alignment={'vertical'}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={(value) => {
            setState({value});
        }}
	/>
```

Breakpoint

```jsx
    initialState = {
        value: '2'
    };
  
    <InputRadioGroup
        id={'breakpoint-multiple-radio'}
        name={'breakpoint-multiple'}
        value={state.value}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        breakpoint={'md'}
        onChange={(value) => {
            setState({value});
        }}
	/>
```

```jsx
    initialState = {
        value: '2'
    };
  
    <InputRadioGroup
        id={'breakpoint-v-multiple-radio'}
        name={'breakpoint-v-multiple'}
        value={state.value}
        alignment={'vertical'}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        breakpoint={'md'}
        onChange={(value) => {
            setState({value});
        }}
	/>
```

Pre-populated

```jsx
    initialState = {
        value: '2'
    };
  
    <InputRadioGroup
        id={'pre-populated-multiple-radio'}
        name={'pre-populated-multiple'}
        value={state.value}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={(value) => {
            setState({value});
        }}
	/>
```

```jsx
    initialState = {
        value: '2'
    };
  
    <InputRadioGroup
        id={'pre-populated-v-multiple-radio'}
        name={'pre-populated-v-multiple'}
        value={state.value}
        alignment={'vertical'}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={(value) => {
            setState({value});
        }}
	/>
```

Disabled

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

Error

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <InputRadioGroup
        id={'error-multiple-radio'}
        name={'error-multiple'}
        value={state.value}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        hint={'Select the checkbox'}
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
        id={'error-multiple-v-radio'}
        name={'error-v-multiple'}
        value={state.value}
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        hint={'Select the checkbox'}
        alignment={'vertical'}
        errorMessage={state.errorMessage}
        onChange={(value) => {
            setState({value, errorMessage: value ? '' : 'Field Required'});
        }}
	/>
```