import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Heading } from '../';

describe('Heading', () => {

  describe('props', () => {

    const wrapper = mount(
      <Heading level={1}>heading</Heading>);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `level` in props', () => {
      expect(wrapper.props().level).toBe(1);
    });
  });

  it('snapshot h1', () => {
    const wrapper = mount(<Heading level={1}>heading</Heading>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot h2', () => {
    const wrapper = mount(<Heading level={2}>heading</Heading>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot h3', () => {
    const wrapper = mount(<Heading level={3}>heading</Heading>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot h4', () => {
    const wrapper = mount(<Heading level={4}>heading</Heading>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot h5', () => {
    const wrapper = mount(<Heading level={5}>heading</Heading>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot h6', () => {
    const wrapper = mount(<Heading level={6}>heading</Heading>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});