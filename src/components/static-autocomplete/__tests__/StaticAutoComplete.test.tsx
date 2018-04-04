import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { StaticAutoComplete } from '../';

describe('StaticAutoComplete', () => {

  const option = { display: 'Test Display', value: 'Test Value'};

  describe('props', () => {

    const mockCallback = jest.fn();

    const wrapper = mount(
      <StaticAutoComplete
        id="id"
        label="label"
        placeholder="placeholder"
        suggestions={[option]}
        selectedItem={{value: 'Test Value', item: option}}
        valuePath="value"
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

    it('should pass `suggestions` in props', () => {
      expect(wrapper.props().suggestions).toEqual([option]);
    });

    it('should pass `selectedItem` in props', () => {
      expect(wrapper.props().selectedItem).toEqual({value: 'Test Value', item: option});
    });

    it('should pass `valuePath` in props', () => {
      expect(wrapper.props().valuePath).toBe('value');
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
    const wrapper = mount(
      <StaticAutoComplete id="id" label="label" suggestions={[option]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot error', () => {
    const wrapper = mount(
      <StaticAutoComplete id="id" label="label" suggestions={[option]} errorMessage="message" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot disabled', () => {
    const wrapper = mount(
      <StaticAutoComplete id="id" label="label" suggestions={[option]} disabled={true} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});