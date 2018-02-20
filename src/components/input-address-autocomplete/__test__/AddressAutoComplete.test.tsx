import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddressAutoComplete } from '../';

describe('AddressAutoComplete', () => {

    let wrapper;

    const prefix = 'address-prefix';
    const endpoint = 'http://test.com.au';

    beforeEach(() => {
        wrapper = mount(
            <AddressAutoComplete
                prefix={prefix}
                endpoint={endpoint}
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
});