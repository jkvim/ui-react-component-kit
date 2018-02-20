import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AddressAutoComplete from '../AddressAutoComplete';

describe('AddressAutoComplete', () => {

    let wrapper;

    const prefix = 'address-prefix';
    const endpoint = 'http://test.com.au';
    const apiKey = '1234567879';

    beforeEach(() => {
        wrapper = mount(
            <AddressAutoComplete
                prefix={prefix}
                endpoint={endpoint}
                apiKey={apiKey}
            />
        );
    });

    it('should match snapshot', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `prefix` in props', () => {
        expect(wrapper.props().prefix).toBe(prefix);
    });

    it('should pass `endpoint` in props', () => {
        expect(wrapper.props().endpoint).toBe(endpoint);
    });

    it('should pass `apiKey` in props', () => {
        expect(wrapper.props().apiKey).toBe(apiKey);
    });
});