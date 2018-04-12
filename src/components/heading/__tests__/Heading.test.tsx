import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Heading } from '../';

describe('Heading', () => {

  describe('props', () => {

    const wrapper = mount(
      <Heading id="heading-1" level={1}>heading</Heading>);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `level` in props', () => {
      expect(wrapper.props().level).toBe(1);
    });
  });

  it('snapshot h1', () => {
    const wrapper = mount(<Heading id="heading-1" level={1}>heading</Heading>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot h2', () => {
    const wrapper = mount(<Heading id="heading-2" level={2}>heading</Heading>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot h3', () => {
    const wrapper = mount(<Heading id="heading-3" level={3}>heading</Heading>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot h4', () => {
    const wrapper = mount(<Heading id="heading-4" level={4}>heading</Heading>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot h5', () => {
    const wrapper = mount(<Heading id="heading-5" level={5}>heading</Heading>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot h6', () => {
    const wrapper = mount(<Heading id="heading-6" level={6}>heading</Heading>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});