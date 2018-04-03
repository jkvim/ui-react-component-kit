import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Error } from '../';

describe('Error', () => {

  describe('props', () => {

    const wrapper = mount(
      <Error id="id" errorMessage="error" />);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `id` in props', () => {
      expect(wrapper.props().id).toBe('id');
    });

    it('should pass `errorMessage` in props', () => {
      expect(wrapper.props().errorMessage).toBe('error');
    });
  });

  it('snapshot basic', () => {
    const wrapper = mount(<Error id="id" errorMessage="error" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});