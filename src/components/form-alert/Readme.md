** Types **

```jsx
    initialState = {
        formFields: [
            { id: 'test-error', label: 'Error', msg: 'Field Required', hasError: true}
        ]
    };
    
    <FormAlert
        id="sampleFormAlert"
        title="Sample Form Alerts"
        formFields={state.formFields}
        isVisible={true}
    />
```