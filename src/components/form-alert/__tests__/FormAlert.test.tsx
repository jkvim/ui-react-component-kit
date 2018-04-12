import * as React from 'react';
import { mount } from 'enzyme';
import { FormAlert } from '../';

const { scrollToElement } = require('../../../utils/scroll');

// Mock scroll implementation
jest.mock('../../../utils/scroll', () => {
  return { scrollToElement: jest.fn(() => null) };
});

describe('FormAlert', () => {
  const formAlertTitle = 'My Form Alert Title';
  const mockFormFields = [
    {
      id: 'someId',
      label: 'Error #1',
      msg: 'Oops something went wrong!',
      hasError: true,
    }
  ];

  describe('props', () => {
    let wrapper;

    beforeEach(() => {

      wrapper = mount(
        <FormAlert
          id="formAlert1"
          title={formAlertTitle}
          formFields={mockFormFields}
          isVisible={true}
        />
      );
    });

    it('should pass `formFields` in props', () => {
      expect(wrapper.props().formFields).toBeDefined();
    });

    it('should pass `title` in props', () => {
      expect(wrapper.props().title).toBeDefined();
    });

    it('should pass `isVisible` in props', () => {
      expect(wrapper.props().isVisible).toBeDefined();
    });
  });

  describe('rendering', () => {
    it('should render `title`', () => {
      const wrapper = mount(
        <FormAlert
          id="formAlert2"
          title={formAlertTitle}
          isVisible={true}
          formFields={mockFormFields}
        />
      );

      const el = wrapper.find('h4');
      expect(el.text()).toBe(formAlertTitle);
    });

    it('should render child props when provided', () => {
      const wrapper = mount(
        <FormAlert
          id="formAlert3"
          title={formAlertTitle}
          isVisible={true}
          formFields={mockFormFields}
        >
          <p>Some Child Text</p>
        </FormAlert>
      );

      const el = wrapper.find('p');
      expect(el.text()).toBe('Some Child Text');
    });

    it('should render list of errors', () => {
      const wrapper = mount(
        <FormAlert
          id="formAlert4"
          title={formAlertTitle}
          isVisible={true}
          formFields={mockFormFields}
        />
      );

      const el = wrapper.find('li');
      expect(el.text()).toBe(`${mockFormFields[0].label} — ${mockFormFields[0].msg}`);
    });

    it('should not render if `isVisible` return false', () => {
      const wrapper = mount(
        <FormAlert
          id="formAlert5"
          title={formAlertTitle}
          isVisible={false}
          formFields={mockFormFields}
        />
      );

      expect(wrapper.html()).toBe(null);
    });
  });

  describe('scrollOnClick', () => {
    it('should call `scrollToElement` when is clicked', () => {
      const wrapper = mount(
        <FormAlert
          id="formAlert6"
          title={formAlertTitle}
          isVisible={true}
          formFields={mockFormFields}
        />
      );

      // Click the close link
      wrapper.find('a').simulate('click');
      expect(scrollToElement.mock.calls.length).toBe(1);
    });
  });
});
