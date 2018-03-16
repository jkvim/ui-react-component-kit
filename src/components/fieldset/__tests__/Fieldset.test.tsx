import * as React from 'react';
import { mount } from 'enzyme';
import { Fieldset } from '../';

describe('Fieldset', () => {
  describe('props', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Fieldset
          id="Test ID"
          legend="my-fieldset-legend"
        />
      );
    });

    it('should pass `id` in props', () => {
      expect(wrapper.props().id).toBeDefined();
    });

    it('should pass `legend` in props', () => {
      expect(wrapper.props().legend).toBeDefined();
    });
  });
});
