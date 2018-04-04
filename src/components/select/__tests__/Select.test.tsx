import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Select } from '../';

describe('Select', () => {

  const option = { display: 'Test Display', value: 'Test Value'};

  describe('props', () => {

    const mockCallback = jest.fn();

    const wrapper = mount(
      <Select
        id="id"
        label="label"
        placeholder="placeholder"
        options={[option]}
        value="Test Value"
        hint="hint"
        disabled={true}
        errorMessage="message"
        className="class"
        onBlur={mockCallback}
        onChange={mockCallback}
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

    it('should pass `options` in props', () => {
      expect(wrapper.props().options).toEqual([option]);
    });

    it('should pass `value` in props', () => {
      expect(wrapper.props().value).toBe('Test Value');
    });

    it('should pass `hint` in props', () => {
      expect(wrapper.props().hint).toBe('hint');
    });

    it('should pass `disabled` in props', () => {
      expect(wrapper.props().disabled).toBe(true);
    });

    it('should pass `errorMessage` in props', () => {
      expect(wrapper.props().errorMessage).toBe('message');
    });

    it('should pass `className` in props', () => {
      expect(wrapper.props().className).toBe('class');
    });

    it('should pass `onBlur` in props', () => {
      expect(wrapper.props().onBlur).toBe(mockCallback);
    });

    it('should pass `onChange` in props', () => {
      expect(wrapper.props().onChange).toBe(mockCallback);
    });
  });

  it('snapshot basic', () => {
    const wrapper = mount(<Select id="id" label="label" options={[option]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot error', () => {
    const wrapper = mount(<Select id="id" label="label" errorMessage="message" options={[option]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot disabled', () => {
    const wrapper = mount(<Select id="id" label="label" disabled={true} options={[option]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('expect value to change when keys are pressed', () => {
    const mockCallback = jest.fn();
    const wrapper = mount(<Select id="id" label="label" onChange={mockCallback} options={[option]} />);
    wrapper.find('select').simulate('change', { target: { value:  'Test Value'}});
    // The mock function is called once
    expect(mockCallback).toBeCalled();
    // The new value was sent
    expect(mockCallback.mock.calls[0][0]).toBe('Test Value');
  });

  it('expect everything to work when no onChange is provided', () => {
    const wrapper = mount(<Select id="id" label="label" options={[option]}  />);
    wrapper.find('select').simulate('change', { target: { value: 'Test Value' } });
  });

  it('expect blur to occur when focused away', () => {
    const mockCallback = jest.fn();
    const wrapper = mount(<Select id="id" label="label" options={[option]} onBlur={mockCallback} />);
    wrapper.find('select').simulate('blur');
    // The mock function is called once
    expect(mockCallback).toBeCalled();
  });

  it('expect everything to work when no onBlur is provided', () => {
    const mockCallback = jest.fn();
    const wrapper = mount(<Select id="id" label="label" options={[option]} onBlur={mockCallback} />);
    wrapper.find('select').simulate('blur');
  });
});
