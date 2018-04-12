** Types **

```jsx
    initialState = {
        formFields: [{id: 'form-alert-input-text', label: 'Error', msg: 'Field Required', hasError: true}],
        inputValue: '',
        inputErrorMessage: 'Field Required'
    };
    
    <div>
        <FormAlert
            id="sampleFormAlert"
            title="Sample Form Alerts"
            formFields={state.formFields}
            isVisible={true}
        />
        
        <div>
            <InputText
                id={'form-alert-input-text'}
                label={'Sample Input Text'}
                placeholder={'Enter Text'}
                hint={'Sample hint'}
                value={state.inputValue}
                errorMessage={state.inputErrorMessage}
                onBlur={(value) => {
                    setState({
                        inputErrorMessage: value ? '' : 'Field Required',
                        formFields: value ? [] : [{id: 'form-alert-input-text', label: 'Error', msg: 'Field Required', hasError: true}]
                    });
                }}
                onChange={(value) => {
                    setState({
                        inputValue: value, 
                        inputErorMessage: ''
                    })
                }}
            />
        </div>
    </div>
```