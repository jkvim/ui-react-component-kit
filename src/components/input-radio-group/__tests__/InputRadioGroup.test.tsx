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
      />
    );
  });

  it('should match snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
