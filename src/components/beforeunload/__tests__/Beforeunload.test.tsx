import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Beforeunload } from '../';

describe('Beforeunload', () => {
  it('should not throw an error when no children are passed', () => {
    const result = shallow(<Beforeunload />);
    expect(result.html()).toEqual(null);
  });

  it('should render its child', () => {
    const child = (<p>Child!</p>);

    const renderedComp = shallow(
      <Beforeunload>
        {child}
      </Beforeunload>
    );

    expect(renderedComp.contains(child)).toEqual(true);
  });

  it('should call `beforeunload` handler when browser is refreshed', () => {
    const child = (<p>Child!</p>);
    const mockFn = jest.fn();

    const renderedComp = mount(
      <Beforeunload onBeforeunload={mockFn}>
        {child}
      </Beforeunload>
    );

    // Simulate beforeunload event
    const event = new Event('beforeunload');
    window.dispatchEvent(event);

    expect(mockFn.mock.calls.length).toEqual(1);
  });
});
