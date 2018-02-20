import * as React from 'react';
import { mount } from 'enzyme';
import { Select } from '../';

describe('SelectField', () => {
  describe('props', () => {
    let wrapper;

    const option = {
      display: 'Test Display',
      value: 'Test Value'
    };

    beforeEach(() => {
      wrapper = mount(
        <Select
          id="some-id"
          label="Some error message."
          options={[option]}
          placeholder="Please select"
        />
      );
    });

    it('should pass `id` in props', () => {
      expect(wrapper.props().id).toBeDefined();
    });

    it('should pass `label` in props', () => {
      expect(wrapper.props().label).toBeDefined();
    });

    it('should pass `options` in props', () => {
      expect(wrapper.props().options).toBeDefined();
    });

    it('should pass `placeholder` in props', () => {
      expect(wrapper.props().placeholder).toBeDefined();
    });
  });
});
