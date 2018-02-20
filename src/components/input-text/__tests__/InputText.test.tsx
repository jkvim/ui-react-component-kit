import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { InputText } from '../';

describe('InputText', () => {

    let wrapper;

    const id = '1234567890';
    const label = 'The label';

    beforeEach(() => {
        wrapper = mount(
            <InputText
                id={id}
                label="The label"
            />
        );
    });

    it('should match snapshot', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `id` in props', () => {
        expect(wrapper.props().id).toBe(id);
    });

    it('should pass `label` in props', () => {
        expect(wrapper.props().label).toBe(label);
    });
});