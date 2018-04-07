import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Paragraph } from '../';

describe('Paragraph', () => {

  describe('props', () => {

    const wrapper = mount(
      <Paragraph>paragraph</Paragraph>);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

  });

});