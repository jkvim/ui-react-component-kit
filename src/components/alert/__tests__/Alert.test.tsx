import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Alert } from '../';

describe('Alert', () => {

  describe('props', () => {

    const wrapper = mount(
      <Alert id="id" type="success" className="class">Hello</Alert>);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `id` in props', () => {
      expect(wrapper.props().id).toBe('id');
    });

    it('should pass `type` in props', () => {
      expect(wrapper.props().type).toBe('success');
    });

    it('should pass `className` in props', () => {
      expect(wrapper.props().className).toBe('class');
    });

    it('should pass `children` in props', () => {
      expect(wrapper.props().children).toBe('Hello');
    });
  });

  it('snapshot basic', () => {
    const wrapper = mount(<Alert id="id" className="class">Hello</Alert>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot success', () => {
    const wrapper = mount(<Alert id="id" type="success" className="class">Hello</Alert>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot info', () => {
    const wrapper = mount(<Alert id="id" type="info" className="class">Hello</Alert>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot warning', () => {
    const wrapper = mount(<Alert id="id" type="warning" className="class">Hello</Alert>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot danger', () => {
    const wrapper = mount(<Alert id="id" type="danger" className="class">Hello</Alert>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});