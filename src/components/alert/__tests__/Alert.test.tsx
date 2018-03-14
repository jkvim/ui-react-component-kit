import * as React from 'react';
import { mount } from 'enzyme';
import { Alert } from '../../alert';

describe('Alert', () => {

  describe('props', () => {
    let wrapper;

    beforeEach(() => {
      const mockOnCloseFn = jest.fn();
      
      wrapper = mount(
        <Alert 
          alertType={'info'}
        />
      );
    });

    it('should pass `alertType` in props', () => {
      expect(wrapper.props().alertType).toBeDefined();
    });
  });

  it('should render child props when provided', () => {
    const wrapper = mount(
      <Alert 
        alertType={'info'}
      >
        <p>Some Child Text</p>
      </Alert>
    );

    const el = wrapper.find('p');
    expect(el.text()).toBe('Some Child Text');
  });
});