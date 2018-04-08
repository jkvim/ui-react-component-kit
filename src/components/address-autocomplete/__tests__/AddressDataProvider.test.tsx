import * as React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { AddressDataProvider } from '../';

describe('AddressDataProvider', () => {

  const mockAxios = new MockAdapter(axios);

  const option = { id: '1234', address: 'Test Address'};

  const dataProvider = new AddressDataProvider('endpoint', 10);

  describe('props', () => {

    it('should pass `endpoint` in constructor', () => {
      expect(dataProvider.endpoint).toEqual('endpoint');
    });

    it('should pass `limit` in constructor', () => {
      expect(dataProvider.limit).toBe(10);
    });
  });

  it('should filter the list of items', done => {
    const mockCallback = jest.fn();

    mockAxios.onGet('endpoint?query=ddress&limit=10').reply(200, {
      data: [ option ]
    });

    dataProvider.filter('ddress', mockCallback).then(() => {
      expect(mockCallback).toBeCalledWith([{ value: 'Test Address', object: option }]);
      done();
    });
  });

  it('should return the selected item', done => {
    const mockCallback = jest.fn();

    mockAxios.onGet('endpoint/1234').reply(200, {
      data: {
        id: '1234',
        address: 'Test Address'
      }
    });

    dataProvider.parseSelectedItem({ value: option.address, object: option }, mockCallback).then(() => {
      // tslint:disable-next-line:max-line-length
      expect(mockCallback).toBeCalledWith({ value: 'Test Address', item: { data: { id: option.id, address: option.address } } });
      done();
    });
  });
});