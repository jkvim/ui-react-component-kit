import * as React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Link } from '../';

describe('Link', () => {

  let component, callback;

  beforeEach(() => {
    callback = jest.fn();
    component = shallow(<Link onClick={callback} isExternal={true} url="http://somewhere" title="title" />);
  });

  test('snapshot', () => {
    expect(toJSON(component)).toMatchSnapshot();
  });

  test('callback', () => {
    expect(callback).not.toBeCalled();
    component.simulate('click');
    expect(callback).toBeCalled();
  });
});
