import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddressAutoComplete } from '../';

describe('AddressAutoComplete', () => {

    let wrapper;

    const id = 'address-id';
    const label = 'Label';
    const endpoint = 'http://test.com.au';

    beforeEach(() => {
        wrapper = mount(
            <AddressAutoComplete
              id={id}
              label={label}
              endpoint={endpoint}
            />
        );
    });

    it('should match snapshot', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `id` in props', () => {
        expect(wrapper.props().id).toBe(id);
    });

    it('should pass `endpoint` in props', () => {
        expect(wrapper.props().endpoint).toBe(endpoint);
    });
});