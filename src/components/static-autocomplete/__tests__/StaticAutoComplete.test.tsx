import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { StaticAutoComplete } from '../';

describe('StaticAutoComplete', () => {

    let wrapper;

    const id = 'static-id';
    const label = 'Label';
    const suggestions = [ 'one', 'two', 'three' ];

    beforeEach(() => {
        wrapper = mount(
            <StaticAutoComplete
              id={id}
              label={label}
              suggestions={suggestions}
            />
        );
    });
    it('should match snapshot', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `id` in props', () => {
        expect(wrapper.props().id).toBe(id);
    });

    it('should pass `suggestions` in props', () => {
        expect(wrapper.props().suggestions).toBe(suggestions);
    });
});