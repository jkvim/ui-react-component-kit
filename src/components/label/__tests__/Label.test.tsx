import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Label } from '../';

describe('Label', () => {

  describe('props', () => {

    const wrapper = mount(
      <Label htmlFor="id" type="standard" hasError={true}>label</Label>);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `htmlFor` in props', () => {
      expect(wrapper.props().htmlFor).toBe('id');
    });

    it('should pass `type` in props', () => {
      expect(wrapper.props().type).toBe('standard');
    });

    it('should pass `hasError` in props', () => {
      expect(wrapper.props().hasError).toBe(true);
    });
  });

  it('snapshot basic', () => {
    const wrapper = mount(<Label htmlFor="id">label</Label>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot standard', () => {
    const wrapper = mount(<Label htmlFor="id" type="standard">label</Label>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot radio', () => {
    const wrapper = mount(<Label htmlFor="id" type="radio">label</Label>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot checkbox', () => {
    const wrapper = mount(<Label htmlFor="id" type="checkbox">label</Label>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot error', () => {
    const wrapper = mount(<Label htmlFor="id" hasError={true}>label</Label>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});