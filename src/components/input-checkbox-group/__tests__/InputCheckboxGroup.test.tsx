import * as React from 'react';
import { mount } from 'enzyme';
import { InputCheckboxGroup } from '../';
import toJSON from 'enzyme-to-json';

describe('InputCheckboxGroup', () => {
  let wrapper;

  const callback = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <InputCheckboxGroup
        id="testId"
        name="testName"
        options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
        onChange={callback}
        values={['2', '3']}
      />
    );
  });

  it('should match snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render checkboxes', () => {
    const inputs = wrapper.find('input');

    expect(inputs.get(0).props.checked).toBe(false);
    expect(inputs.get(1).props.checked).toBe(true);
    expect(inputs.get(2).props.checked).toBe(true);
  });

  it('should change checkbox', () => {
    const input = wrapper.find('input').at(2).simulate('change');
    expect(callback).toHaveBeenCalledWith(['2']);
  });

});
