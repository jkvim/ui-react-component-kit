Blank

```jsx
    initialState = {};
  
    <Select
        id={'blank-select'}
        label={'Blank Select'}
        placeholder={'Select an Option'}
        value={state.value}
        onChange={(value) => {
            setState({value});
        }}
        options={[
            { display: 'Display 1', value: 'Test 1'},
            { display: 'Display 2', value: 'Test 2'},
            { display: 'Display 3', value: 'Test 3'}
        ]}
	/>
```

Pre-populated

```jsx
    initialState = {
        value: 'Test 3'
    };
  
    <Select
        id={'pre-populate-select'}
        label={'Pre-populate Select'}
        placeholder={'Select an Option'}
        value={state.value}
        onChange={(value) => {
            setState({value});
        }}
        options={[
            { display: 'Display 1', value: 'Test 1'},
            { display: 'Display 2', value: 'Test 2'},
            { display: 'Display 3', value: 'Test 3'}
        ]}
    />
```

Disabled

```jsx
    initialState = {
        value: 'Test 3'
    };
  
    <Select
        id={'disabled-select'}
        label={'Disabled Select'}
        placeholder={'Select an Option'}
        value={state.value}
        onChange={(value) => {
            setState({value});
        }}
        options={[
            { display: 'Display 1', value: 'Test 1'},
            { display: 'Display 2', value: 'Test 2'},
            { display: 'Display 3', value: 'Test 3'}
        ]}
        disabled={true}
    />
```

Error

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <Select
        id={'error-select'}
        label={'Error Select'}
        placeholder={'Select an Option'}
        hint={'Sample hint'}
        value={state.value}
        errorMessage={state.errorMessage}
        options={[
            { display: 'Display 1', value: 'Test 1'},
            { display: 'Display 2', value: 'Test 2'},
            { display: 'Display 3', value: 'Test 3'}
        ]}
        onBlur={(value) => {
            setState({errorMessage: value ? '' : 'Field Required'});
        }}
        onChange={(value) => {
            setState({value, errorMessage: ''})
        }}
    />
```