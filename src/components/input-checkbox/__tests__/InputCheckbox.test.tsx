import * as React from 'react';
import { mount } from 'enzyme';
import { InputCheckbox } from '../';
import toJSON from 'enzyme-to-json';

describe('InputCheckbox', () => {
  let wrapper;

  const callback = jest.fn();
  const label = 'Tick this checkbox to confirm that you agree with the following statements';

  beforeEach(() => {
    wrapper = mount(
      <InputCheckbox
        id="testId"
        label={label}
        onChange={callback}
      />
    );
  });

  it('should match snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders input tag', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should render checkbox unticked', () => {
    const checkbox = wrapper.find('input');
    expect(checkbox.props().checked).toBeFalsy();
  });

  it('renders label', () => {
    expect(wrapper.find('label')).toHaveLength(1);
  });

  it('renders label with passed in label text', () => {
    expect(wrapper.find('label').text()).toBe(label);
  });

  describe('onChange callback', () => {
    test('should call onChange callback when provided', () => {
      expect(callback).not.toBeCalled();
      wrapper.find('input').simulate('change');
      expect(callback).toBeCalled();
    });
  });
});
