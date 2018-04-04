import * as React from 'react';
import { StaticDataProvider } from '../';

describe('StaticDataProvider', () => {

  const option = { display: 'Test Display', value: 'Test Value'};

  const dataProvider = new StaticDataProvider([option], 'display');

  describe('props', () => {

    it('should pass `suggestions` in constructor', () => {
      expect(dataProvider.suggestions).toEqual([option]);
    });

    it('should pass `valuePath` in constructor', () => {
      expect(dataProvider.valuePath).toBe('display');
    });
  });

  it('should filter the list of items', () => {
    const mockCallback = jest.fn();

    dataProvider.filter('is', mockCallback);

    expect(mockCallback).toBeCalledWith([{ value: 'Test Display', object: option }]);
  });

  it('should return the selected item', () => {
    const mockCallback = jest.fn();

    dataProvider.parseSelectedItem({ value: option.display, object: option }, mockCallback);

    expect(mockCallback).toBeCalledWith({ value: 'Test Display', item: option });
  });
});