import * as React from 'react';
import { mount } from 'enzyme';
import { Fieldset } from '../';

describe('Fieldset', () => {
  describe('props', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Fieldset
          legend="my-fieldset-legend"
          className="my-fieldset-class"
        />
      );
    });

    it('should pass `legend` in props', () => {
      expect(wrapper.props().legend).toBeDefined();
    });

    it('should pass `className` in props', () => {
      expect(wrapper.props().className).toBeDefined();
    });
  });
});
