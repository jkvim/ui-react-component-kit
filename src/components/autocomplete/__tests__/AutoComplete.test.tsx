import * as React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AutoComplete, DataProvider, SelectableItem, ParsedSelectedItem } from '../';

class MockDataProvider implements DataProvider {
  filter(searchTerm: string, callback: (filteredResult: Array<SelectableItem>) => void): void {
    callback([]);
  }

  parseSelectedItem(selectedItem: SelectableItem, callback: (parsedItem: ParsedSelectedItem) => void): void {
    callback({
      value: selectedItem.value,
      item: selectedItem.object
    });
  }
}

describe('AutoComplete', () => {

  const mockDataProvider = new MockDataProvider();

  const option = { display: 'Test Display', value: 'Test Value'};

  describe('props', () => {

    const mockCallback = jest.fn();

    const wrapper = mount(
      <AutoComplete
        id="id"
        dataProvider={mockDataProvider}
        label="label"
        placeholder="placeholder"
        minSearchLength={10}
        focusOnMount={false}
        selectedItem={{value: 'Test Value', item: option}}
        hint="hint"
        disabled={true}
        errorMessage="message"
        className="class"
        onBlur={mockCallback}
        onChange={mockCallback}
      />);

    it('should match snapshot', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should pass `id` in props', () => {
      expect(wrapper.props().id).toBe('id');
    });

    it('should pass `label` in props', () => {
      expect(wrapper.props().label).toBe('label');
    });

    it('should pass `placeholder` in props', () => {
      expect(wrapper.props().placeholder).toBe('placeholder');
    });

    it('should pass `minSearchLength` in props', () => {
      expect(wrapper.props().minSearchLength).toEqual(10);
    });

    it('should pass `selectedItem` in props', () => {
      expect(wrapper.props().selectedItem).toEqual({value: 'Test Value', item: option});
    });

    it('should pass `focusOnMount` in props', () => {
      expect(wrapper.props().focusOnMount).toBe(false);
    });

    it('should pass `hint` in props', () => {
      expect(wrapper.props().hint).toBe('hint');
    });

    it('should pass `disabled` in props', () => {
      expect(wrapper.props().disabled).toBe(true);
    });

    it('should pass `errorMessage` in props', () => {
      expect(wrapper.props().errorMessage).toBe('message');
    });

    it('should pass `className` in props', () => {
      expect(wrapper.props().className).toBe('class');
    });

    it('should pass `onBlur` in props', () => {
      expect(wrapper.props().onBlur).toBe(mockCallback);
    });

    it('should pass `onChange` in props', () => {
      expect(wrapper.props().onChange).toBe(mockCallback);
    });
  });

  it('snapshot basic', () => {
    const wrapper = mount(
      <AutoComplete id="id" dataProvider={mockDataProvider} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot error', () => {
    const wrapper = mount(
      <AutoComplete id="id" dataProvider={mockDataProvider} errorMessage="message" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('snapshot disabled', () => {
    const wrapper = mount(
      <AutoComplete id="id" dataProvider={mockDataProvider} disabled={true} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});