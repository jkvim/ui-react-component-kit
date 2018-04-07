import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { InputCheckboxGroup } from '../';

describe('InputCheckboxGroup', () => {

  const options = [ { label: 'label', value: 'value' }, { label: 'one', value: '1' } ];
  const values = [ 'value' ];

  describe('props', () => {

    const mockCallback = jest.fn();

    const wrapper = mount(
      <InputCheckboxGroup
        id="id"
        name="name"
        options={options}
        values={values}
        alignment="horizontal"
        breakpoint="md"
        hint="hint"
        errorMessage="error"
        className="class"
        disabled={true}
        onChange={mockCallback}
      />);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `id` in props', () => {
      expect(wrapper.props().id).toBe('id');
    });

    it('should pass `name` in props', () => {
      expect(wrapper.props().name).toBe('name');
    });

    it('should pass `options` in props', () => {
      expect(wrapper.props().options).toEqual(options);
    });

    it('should pass `values` in props', () => {
      expect(wrapper.props().values).toEqual(values);
    });

    it('should pass `hint` in props', () => {
      expect(wrapper.props().hint).toBe('hint');
    });

    it('should pass `alignment` in props', () => {
      expect(wrapper.props().alignment).toBe('horizontal');
    });

    it('should pass `breakpoint` in props', () => {
      expect(wrapper.props().breakpoint).toBe('md');
    });

    it('should pass `errorMessage` in props', () => {
      expect(wrapper.props().errorMessage).toBe('error');
    });

    it('should pass `className` in props', () => {
      expect(wrapper.props().className).toBe('class');
    });

    it('should pass `disabled` in props', () => {
      expect(wrapper.props().disabled).toBe(true);
    });

    it('should pass `onChange` in props', () => {
      expect(wrapper.props().onChange).toBe(mockCallback);
    });
  });

  it('snapshot basic', () => {
    const wrapper = mount(<InputCheckboxGroup id="id" name="name" options={options} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot error', () => {
    const wrapper = mount(<InputCheckboxGroup id="id" name="name" options={options} errorMessage="Error" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot disabled', () => {
    const wrapper = mount(<InputCheckboxGroup id="id" name="name" options={options} disabled={true} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should pre-select radio', () => {
    const wrapper = mount(<InputCheckboxGroup id="id" name="name" options={options}  values={['value', '1']} />);
    const inputs = wrapper.find('input');

    expect(inputs.get(0).props.checked).toBe(true);
    expect(inputs.get(1).props.checked).toBe(true);
  });

  it('expect value to change when keys are pressed', () => {
    const mockCallback = jest.fn();
    const wrapper = mount(<InputCheckboxGroup id="id" name="name" options={options} onChange={mockCallback} />);
    wrapper.find('input').at(1).simulate('change', { target: { value:  '1'}});
    // The mock function is called once
    expect(mockCallback).toBeCalled();
    // The new value was sent
    expect(mockCallback.mock.calls[0][0]).toEqual(['1']);
  });

  it('expect everything to work when no onChange is provided', () => {
    const wrapper = mount(<InputCheckboxGroup id="id" name="name" options={options} />);
    wrapper.find('input').at(1).simulate('change', { target: { value: '1' } });
  });
});
