import * as React from 'react';
import { mount } from 'enzyme';
import { InputRadioGroup } from '../';
import toJSON from 'enzyme-to-json';

describe('InputRadioGroup', () => {
  let wrapper;

  const callback = jest.fn();
  const options = [{label: 'one', value: '1'}, {label: 'two', value: '2'}];

  beforeEach(() => {
    wrapper = mount(
      <InputRadioGroup
        id="testId"
        name="testName"
        options={options}
        onChange={callback}
        value={'2'}
      />
    );
  });

  it('should match snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render radios', () => {
    const inputs = wrapper.find('input');

    expect(inputs.get(0).props.checked).toBe(false);
    expect(inputs.get(1).props.checked).toBe(true);
  });

  it('should change radio', () => {
    const input = wrapper.find('input').at(0).simulate('change');
    expect(input.props().value).toBe('1');
  });

});
