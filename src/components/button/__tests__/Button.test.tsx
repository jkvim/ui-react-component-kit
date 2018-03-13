import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Button, { ButtonProps } from '../Button';

describe('Button', () => {
  let wrapper: ReactWrapper<ButtonProps>;
  let handler: jest.Mock;

  beforeEach(() => {
    handler = jest.fn();

    wrapper = mount(
      <Button onClick={handler}>Hello</Button>
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass `children` in props', () => {
    expect(wrapper.props().children).toBe('Hello');
  });

  it('should call handler on click', () => {
    wrapper.simulate('click');
    expect(handler).toBeCalled();
  });
});