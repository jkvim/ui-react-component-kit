import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { InputText } from '../';

describe('InputText', () => {

  describe('props', () => {

    const mockCallback = jest.fn();

    const wrapper = mount(
      <InputText
              id="id"
              label="label"
              placeholder="placeholder"
              value="value"
              hint="hint"
              errorMessage="error"
              showError={true}
              className="class"
              disabled={true}
              onBlur={mockCallback}
              onChange={mockCallback}
              onKeyDown={mockCallback}
      />);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `id` in props', () => {
      expect(wrapper.props().id).toBe('id');
    });

    it('should pass `label` in props', () => {
      expect(wrapper.props().label).toBe('label');
    });

    it('should pass `placeholder` in props', () => {
      expect(wrapper.props().placeholder).toBe('placeholder');
    });

    it('should pass `value` in props', () => {
      expect(wrapper.props().value).toBe('value');
    });

    it('should pass `hint` in props', () => {
      expect(wrapper.props().hint).toBe('hint');
    });

    it('should pass `errorMessage` in props', () => {
      expect(wrapper.props().errorMessage).toBe('error');
    });

    it('should pass `showError` in props', () => {
      expect(wrapper.props().showError).toBe(true);
    });

    it('should pass `className` in props', () => {
      expect(wrapper.props().className).toBe('class');
    });

    it('should pass `disabled` in props', () => {
      expect(wrapper.props().disabled).toBe(true);
    });

    it('should pass `onBlur` in props', () => {
      expect(wrapper.props().onBlur).toBe(mockCallback);
    });

    it('should pass `onChange` in props', () => {
      expect(wrapper.props().onChange).toBe(mockCallback);
    });

    it('should pass `onKeyDown` in props', () => {
      expect(wrapper.props().onKeyDown).toBe(mockCallback);
    });
  });

  it('snapshot basic', () => {
    const wrapper = mount(<InputText id="id" label="label" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot error', () => {
    const wrapper = mount(<InputText id="id" label="label" errorMessage="Error" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot disabled', () => {
    const wrapper = mount(<InputText id="id" label="label" disabled={true} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('expect value to change when keys are pressed', () => {
    const mockCallback = jest.fn();
    const wrapper = mount(<InputText id="id" label="label" onChange={mockCallback} />);
    wrapper.find('input').at(0).simulate('change', { target: { value:  'a'}});
    // The mock function is called once
    expect(mockCallback).toBeCalled();
    // The new value was sent
    expect(mockCallback.mock.calls[0][0]).toBe('a');
  });

  it('expect everything to work when no onChange is provided', () => {
    const wrapper = mount(<InputText id="id" label="label" />);
    wrapper.find('input').at(0).simulate('change', { target: { value: 'a' } });
  });
});