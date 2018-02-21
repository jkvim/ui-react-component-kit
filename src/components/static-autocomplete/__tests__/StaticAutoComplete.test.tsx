import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { StaticAutoComplete } from '../';

describe('StaticAutoComplete', () => {

    let wrapper;

    const label = 'Label';
    const prefix = 'static-prefix';
    const suggestions = [ 'one', 'two', 'three' ];

    beforeEach(() => {
        wrapper = mount(
            <StaticAutoComplete
              label={label}
              prefix={prefix}
              suggestions={suggestions}
            />
        );
    });

    it('should match snapshot', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `prefix` in props', () => {
        expect(wrapper.props().prefix).toBe(prefix);
    });

    it('should pass `suggestions` in props', () => {
        expect(wrapper.props().suggestions).toBe(suggestions);
    });
});