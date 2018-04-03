import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Hint } from '../';

describe('Hint', () => {

  describe('props', () => {

    const wrapper = mount(
      <Hint value="hint" hasError={true} />);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `value` in props', () => {
      expect(wrapper.props().value).toBe('hint');
    });

    it('should pass `hasError` in props', () => {
      expect(wrapper.props().hasError).toBe(true);
    });
  });

  it('snapshot basic', () => {
    const wrapper = mount(<Hint value="hint" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot error', () => {
    const wrapper = mount(<Hint value="hint" hasError={true} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});