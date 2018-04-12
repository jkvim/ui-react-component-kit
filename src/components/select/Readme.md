** Usage **

```javascript static
    import { Select } from 'ui-react-component-kit'
```

** States **

```jsx
    initialState = {
        errorMessage: 'Field Required'
    };
  
    <Select
        id={'unselected-select'}
        label={'Sample Select'}
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

```jsx
    initialState = {
        value: 'Test 3'
    };
  
    <Select
        id={'disabled-select'}
        label={'Disabled Select'}
        hint={'Sample hint'}
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