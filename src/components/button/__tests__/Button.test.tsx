import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Button } from '../';

describe('Button', () => {

  describe('props', () => {

    const mockCallback = jest.fn();

    const wrapper = mount(
      <Button type="primary" disabled={true} onClick={mockCallback}>Hello</Button>);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `type` in props', () => {
      expect(wrapper.props().type).toBe('primary');
    });

    it('should pass `disabled` in props', () => {
      expect(wrapper.props().disabled).toBe(true);
    });

    it('should pass `onClick` in props', () => {
      expect(wrapper.props().onClick).toBe(mockCallback);
    });

    it('should pass `children` in props', () => {
      expect(wrapper.props().children).toBe('Hello');
    });
  });

  it('snapshot basic', () => {
    const mockCallback = jest.fn();
    const wrapper = mount(<Button type="primary" onClick={mockCallback}>Hello</Button>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot disabled', () => {
    const mockCallback = jest.fn();
    const wrapper = mount(<Button type="primary" disabled={true} onClick={mockCallback}>Hello</Button>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should call callback on click', () => {
    const mockCallback = jest.fn();
    const wrapper = mount(<Button type="primary" onClick={mockCallback}>Hello</Button>);
    wrapper.simulate('click');
    expect(mockCallback).toBeCalled();
  });
});