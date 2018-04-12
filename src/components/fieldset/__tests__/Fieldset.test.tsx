import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Fieldset } from '../';

describe('Fieldset', () => {

  describe('props', () => {

    const wrapper = mount(
      <Fieldset id="id" legend="legend" className="class" />);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `id` in props', () => {
      expect(wrapper.props().id).toBe('id');
    });

    it('should pass `legend` in props', () => {
      expect(wrapper.props().legend).toBe('legend');
    });

    it('should pass `className` in props', () => {
      expect(wrapper.props().className).toBe('class');
    });
  });
});
