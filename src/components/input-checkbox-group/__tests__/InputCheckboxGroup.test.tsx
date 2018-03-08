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
      />
    );
  });

  it('should match snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});
