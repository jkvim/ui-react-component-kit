import * as React from 'react';
import { bindAll, debounce, escapeRegExp } from 'lodash';
import { DataProvider, FooterComponent, ParsedSelectedItem, SelectableItem } from './types';
import * as keys from '../../constants/keyboardKeys';
import InputText from '../input-text/InputText';
import { StyledAccessibleHiddenDiv } from '../../theme/common';
import {
  StyledAutoCompleteContainer,
  StyledAutoCompleteResults,
  StyledSelectableListItem,
  StyledItemAnchor,
  StyledSelectableList,
  StyledListItem
} from './styledAutoComplete';

export interface AutoCompleteProps {
  prefix: string;
  label?: string;
  dataProvider: DataProvider;
  required?: boolean;
  selectedItem?: ParsedSelectedItem;
  onBlur?: (obj?: ParsedSelectedItem) => void;
  onChange?: (obj?: ParsedSelectedItem) => void;
  errorMessage?: string;
  suggestionFooter?: FooterComponent;
  focusOnMount?: boolean;
  minSearchLength?: number;
  hint?: string;
  className?: string;
}

export interface AutoCompleteState {
  showSuggestions: boolean;
  suggestions: Array<SelectableItem>;
  searchTerm: string;
  isItemSelected: boolean;
  selectedIndex: number;
}

interface NextIndex {
  index: number;
  isFooter: boolean;
}

class AutoComplete extends React.Component<AutoCompleteProps, AutoCompleteState> {

  debouncedGetSuggestions;
  inputRef: HTMLInputElement;

  constructor(props: AutoCompleteProps) {
    super(props);

    // PrePop value is passed through the FieldState object.
    const { selectedItem } = props;

    this.state = {
      showSuggestions: false,
      suggestions: [],
      searchTerm: selectedItem ? selectedItem.value : '',
      isItemSelected: !!selectedItem,
      selectedIndex: -1
    };

    this.debouncedGetSuggestions = debounce(this.getSuggestions, 200);

    bindAll(this, ['handleChange', 'handleBlur', 'handleItemSelect', 'handleTabDown', 'highlightSuggestion',
      'selectSuggestion', 'moveToSuggestion', 'getNextIndexSuggestion', 'getSuggestions', 'handleKeyDownInput',
      'setInputRef'
    ]);
  }

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.inputRef.focus();
    }
  }

  getSuggestions () {
    const searchTerm = this.state.searchTerm;
    if (searchTerm !== '') {
      this.props.dataProvider.filter(searchTerm, ((parsedResults: Array<SelectableItem>) => {
        this.setState({
          suggestions: parsedResults
        });
      }).bind(this));
    } else {
      this.setState({
        suggestions: []
      });
    }
  }

  setInputRef(ref: HTMLInputElement) {
    this.inputRef = ref;
  }

  // --------- Handlers: ---------------
  handleChange (value: string) {
    const { minSearchLength = 1 } = this.props;
    this.setState({
      searchTerm: value,
      showSuggestions: value.length >= minSearchLength,
      isItemSelected: false,
      selectedIndex: -1 // reset suggestion selection
    });

    // Update suggestions
    if (value.length >= minSearchLength) {
      this.debouncedGetSuggestions();
    }
  }

  handleBlur () {
    const { isItemSelected, searchTerm } = this.state;

    this.setState({
      searchTerm: isItemSelected ? searchTerm : '',
      showSuggestions: false,
      selectedIndex: -1 // reset suggestion selection
    });

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  handleKeyDownInput (keyCode: number, e: React.KeyboardEvent<HTMLInputElement> ) {
    let { selectedIndex, suggestions, showSuggestions } = this.state;
    let { suggestionFooter } = this.props;
    if (showSuggestions) {
      if (
        suggestionFooter &&
        selectedIndex === suggestions.length &&
        (keyCode === keys.RETURN || keyCode === keys.SPACE)
      ) {
        // footer is focused
        suggestionFooter.onClick(e);
      } else {
        // item is focused
        if (keyCode === keys.RETURN) {
          this.handleItemSelect(suggestions[selectedIndex], e);
        } else if (keyCode === keys.ESC) {
          e.preventDefault();
          this.setState(
            {
              searchTerm: '',
              isItemSelected: false,
              showSuggestions: false
            }
          );
        } else if (keyCode === keys.DOWN) {
          this.moveToSuggestion(e, true);
        } else if (keyCode === keys.UP) {
          this.moveToSuggestion(e, false);
        } else if (keyCode === keys.TAB && selectedIndex > -1) {
          this.handleTabDown(suggestions[selectedIndex]);
        }
      }
    }
  }

  handleItemSelect (value: SelectableItem, e: React.SyntheticEvent<HTMLElement>) {
    e.preventDefault();
    e.stopPropagation();
    this.selectSuggestion(value);
  }

  handleTabDown (value: SelectableItem) {
    let { selectedIndex, showSuggestions, suggestions: { length } } = this.state;
    let { suggestionFooter } = this.props;

    if (showSuggestions) {
      if (!suggestionFooter || selectedIndex !== length) {
        // footer is not selected
        // select the option and go straight to next item
        this.selectSuggestion(value);
      }
    }
  }

  // ------------ Helper methods: ---------------
  selectSuggestion (value: SelectableItem) {
    this.props.dataProvider.parseSelectedItem(value, ((result) => {
      this.setState(
        {
          searchTerm: result.value,
          showSuggestions: false,
          isItemSelected: true
        }, () => {
          this.inputRef.focus();
        }
      );
      if (this.props.onChange) {
        this.props.onChange(result);
      }
    }).bind(this));
  }

  moveToSuggestion (e: React.KeyboardEvent<HTMLElement>, movingDown: boolean) {
    e.preventDefault();
    e.stopPropagation();
    const { index, isFooter } = this.getNextIndexSuggestion(movingDown);

    this.setState({
      selectedIndex: index,
      searchTerm: isFooter ? this.props.suggestionFooter.displayValue : this.state.suggestions[index].value
    });
  }

  getNextIndexSuggestion (movingDown: boolean): NextIndex {
    let curr = this.state.selectedIndex;
    let { suggestionFooter } = this.props;
    let { suggestions: { length } } = this.state;
    let totalLimit = suggestionFooter ? length + 1 : length;

    let next;
    if (movingDown) {
      next = curr + 1;
      next = next === totalLimit ? 0 : next;
    } else {
      next = curr - 1;
      next = next < 0 ? totalLimit - 1 : next;
    }

    return {
      index: next,
      isFooter: suggestionFooter && next === totalLimit - 1
    };
  }

  // ------------ Rendering methods: ---------------
  buildSuggestionFooter () {
    let { suggestionFooter, prefix } = this.props;
    let { selectedIndex, suggestions: { length } } = this.state;

    if (suggestionFooter) {
      return (
        <StyledSelectableListItem
          role="option"
          id={`${prefix}-item${length}`}
          aria-disabled={false}
          tabIndex={-1}
          aria-selected={selectedIndex === length}
          onMouseDown={suggestionFooter.onClick}
        >
          {suggestionFooter.component}
        </StyledSelectableListItem>
      );
    }
  }

  highlightSuggestion (suggestion: string) {
    const { searchTerm } = this.state;

    if (!searchTerm.trim()) {
      return <span>{suggestion}</span>;
    }

    const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
    const parts = suggestion.split(regex);
    return (
      <div>
        {parts.map((part, i) => (
          regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
        ))}
      </div>
    );
  }

  buildSuggestions () {
    let returnValue;
    let { prefix } = this.props;
    let { showSuggestions, searchTerm, suggestions, selectedIndex } = this.state;

    if (
      showSuggestions &&
      searchTerm &&
      suggestions
    ) {
      let suggestionsNum = suggestions.length;
      let listItems;
      if (suggestionsNum === 0) {
        listItems = (
          <StyledListItem
            className="no-match"
            id={`${prefix}-item0`}
            role="option"
            aria-selected={false}
          >
            No results matched
          </StyledListItem>
        );
      } else {
        listItems = suggestions.map((suggestion, index) => {
          let itemId = `${prefix}-item${index}`;
          return (
            <StyledSelectableListItem
              id={itemId}
              key={index}
              role="option"
              aria-disabled={false}
              aria-selected={selectedIndex === index}
              onMouseDown={e => {
                this.handleItemSelect(suggestion, e);
              }}
            >

              <StyledItemAnchor>{this.highlightSuggestion(suggestion.value)}</StyledItemAnchor>
            </StyledSelectableListItem>
          );
        });
      }

      let suggestionsFoundText =
        (suggestionsNum === 0 ? 'No results matched. ' : '') +
        `${suggestionsNum} suggestion` +
        (suggestionsNum !== 1 ? 's' : '') +
        ' found in listbox';

      returnValue = (
        <StyledAutoCompleteResults>
          <StyledSelectableList
            id={`suggestions_${prefix}`}
            role="listbox"
            aria-expanded={showSuggestions}
            aria-label="Suggestions"
            tabIndex={-1}
          >
            {listItems}
            {this.buildSuggestionFooter()}
          </StyledSelectableList>
          <StyledAccessibleHiddenDiv>
            {suggestionsFoundText}
          </StyledAccessibleHiddenDiv>
        </StyledAutoCompleteResults>
      );
    }
    return returnValue;
  }

  // ------------ Render: ---------------

  render () {
    let { prefix, errorMessage, hint, label = '', className } = this.props;
    let { searchTerm, showSuggestions, selectedIndex } = this.state;

    let listBoxNavigationText =
      'To navigate the listbox, press the down and up arrows. To select, press enter. To close, press ESC.\n ';

    return (
      <StyledAutoCompleteContainer role="application" onBlur={this.handleBlur} className={className}>
        <InputText
          id={`${prefix}-autocomplete`}
          label={label}
          hint={hint}
          errorMessage={errorMessage}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDownInput}
          setInputRef={this.setInputRef}
          value={searchTerm}
          role="combobox"
          aria-owns={`suggestions_${prefix}`}
          aria-expanded={showSuggestions}
          aria-autocomplete="list"
          aria-activedescendant={selectedIndex >= 0 ? `${prefix}-item${selectedIndex}` : ''}
          aria-invalid={!!errorMessage}
          aria-describedby={`${prefix}-autocomplete-error`}
        />
        {showSuggestions}
        {this.buildSuggestions()}
        <StyledAccessibleHiddenDiv aria-live="polite">
          {showSuggestions && listBoxNavigationText}
        </StyledAccessibleHiddenDiv>
      </StyledAutoCompleteContainer>
    );
  }
}

export default AutoComplete;
