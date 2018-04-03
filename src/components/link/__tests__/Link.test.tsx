import * as React from 'react';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Link } from '../';
import mock = jest.mock;

describe('Link', () => {

  const mockCallback = jest.fn();

  describe('props', () => {

    const wrapper = mount(
      <Link
        id="id"
        title="title"
        url="http://google.com.au"
        isExternal={true}
        onClick={mockCallback}
        className="class"
      />);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `id` in props', () => {
      expect(wrapper.props().id).toBe('id');
    });

    it('should pass `title` in props', () => {
      expect(wrapper.props().title).toBe('title');
    });

    it('should pass `url` in props', () => {
      expect(wrapper.props().url).toBe('http://google.com.au');
    });

    it('should pass `isExternal` in props', () => {
      expect(wrapper.props().isExternal).toBe(true);
    });

    it('should pass `onClick` in props', () => {
      expect(wrapper.props().onClick).toBe(mockCallback);
    });

    it('should pass `className` in props', () => {
      expect(wrapper.props().className).toBe('class');
    });
  });

  it('snapshot basic', () => {
    const wrapper = mount(<Link id="id" title="title" url="http://google.com" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot internal', () => {
    const wrapper = mount(<Link id="id" title="title" url="inner" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot external', () => {
    const wrapper = mount(<Link id="id" title="title" url="http://google.com" isExternal={true} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('callback', () => {
    expect(mockCallback).not.toBeCalled();
    const wrapper = mount(
      <Link id="id" title="title" url="http://google.com" onClick={mockCallback} isExternal={true} />);
    wrapper.simulate('click');
    expect(mockCallback).toBeCalled();
  });
});
