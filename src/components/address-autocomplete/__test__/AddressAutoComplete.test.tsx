import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddressAutoComplete } from '../';

describe('AddressAutoComplete', () => {

  const option = { display: 'Test Display', value: 'Test Value'};

  describe('props', () => {

    const mockCallback = jest.fn();

    const wrapper = mount(
      <AddressAutoComplete
        id="id"
        label="label"
        placeholder="placeholder"
        endpoint="endpoint"
        limit={10}
        focusOnMount={false}
        selectedItem={{value: 'Test Value', item: option}}
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

    it('should pass `endpoint` in props', () => {
      expect(wrapper.props().endpoint).toBe('endpoint');
    });

    it('should pass `limit` in props', () => {
      expect(wrapper.props().limit).toEqual(10);
    });

    it('should pass `selectedItem` in props', () => {
      expect(wrapper.props().selectedItem).toEqual({value: 'Test Value', item: option});
    });

    it('should pass `focusOnMount` in props', () => {
      expect(wrapper.props().focusOnMount).toBe(false);
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
      <AddressAutoComplete id="id" label="label" endpoint="endpoint" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot error', () => {
    const wrapper = mount(
      <AddressAutoComplete id="id" label="label" endpoint="endpoint" errorMessage="message" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot disabled', () => {
    const wrapper = mount(
      <AddressAutoComplete id="id" label="label" endpoint="endpoint" disabled={true} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});