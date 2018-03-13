import * as React from 'react';
import { mount } from 'enzyme';
import { IdleTime } from '../';

const CustomTestComponent = () => {
  return <div>content</div>;
};

describe('IdleTime', () => {

  let component, mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = mount((
      <IdleTime unmountBeforeUnloadListener={mockFn} sessionTimeout={5000}>
        <CustomTestComponent />
        <CustomTestComponent />
      </IdleTime>
    ));
  });

  test('snapshot', () => {

    // should render all childrens
    expect(component.find(CustomTestComponent).length).toBe(2);
    expect(component.timerRef).not.toBe(null);
    const child0 = component.find(CustomTestComponent).at(0);
    const child1 = component.find(CustomTestComponent).at(1);
    expect(child0.props().resumeIdleTimer).toBeDefined();
    expect(child0.props().pauseIdleTimer).toBeDefined();
    expect(child0.props().resetIdleTimer).toBeDefined();
    expect(child1.props().resumeIdleTimer).toBeDefined();
    expect(child1.props().pauseIdleTimer).toBeDefined();
    expect(child1.props().resetIdleTimer).toBeDefined();

  });

  test('onIdleAction', () => {

    let instance = component.instance() as IdleTime
    expect(mockFn).not.toBeCalled();

    instance.onIdleAction();
    expect(mockFn).toBeCalled();

  });

  test('reset, pause, resume timer callbacks', () => {
    let instance = component.instance() as IdleTime;

    const resetSpy = jest.spyOn(instance.timerRef, 'reset');
    const pauseSpy = jest.spyOn(instance.timerRef, 'pause');
    const resumeSpy = jest.spyOn(instance.timerRef, 'resume');

    const child = component.find(CustomTestComponent).at(0);

    expect(resumeSpy).not.toBeCalled();
    child.props().resumeIdleTimer();
    expect(resumeSpy).toBeCalled();

    expect(pauseSpy).not.toBeCalled();
    child.props().pauseIdleTimer();
    expect(pauseSpy).toBeCalled();

    expect(resetSpy).not.toBeCalled();
    child.props().resetIdleTimer();
    expect(resetSpy).toBeCalled();
  });

});
