import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, array, text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { action } from '@storybook/addon-actions';
import { Store, State } from "@sambego/storybook-state";
import { withReadme } from 'storybook-readme';
import StaticAutoComplete from "./StaticAutoComplete";
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from "../../theme/defaultTheme";
import README from './README.md';

const store1 = new Store({});
const store2 = new Store({});
const store3 = new Store({});
const store4 = new Store({});

const PageDiv = styled.div`
		width: 95%;
		margin-left: auto;
		margin-right: auto;
	`;

const PageDecorator = (storyFn) => (
  <PageDiv>
    <ThemeProvider theme={ object('Styles', defaultTheme) }>
      { storyFn() }
    </ThemeProvider>
  </PageDiv>
);

const story = storiesOf('static-autocomplete', module);
story.addDecorator(PageDecorator);
story.addDecorator(withKnobs);
story.addDecorator(withReadme(README));
story
	.add('blank',
    withInfo({
      inline: true,
      text: 'An Autocomplete with a static list of options (fruits)'
    })
    (() => {
			return (
				<State store={store1}>
					<StaticAutoComplete
            label={text('Label', 'Demo Static')}
						prefix={text('Prefix', 'static-ac')}
						suggestions={array('Suggestions', ['apple', 'banana', 'mango', 'pineapple', 'oranges'])}
            onChange={action('onChange')}
            onBlur={action('onBlur')}
          />
				</State>
			)
		})
	)
  .add('pre-populated',
    withInfo({
      inline: true,
      text: 'An Autocomplete with a static list of options (fruits)'
    })
    (() => {
      return (
        <State store={store2}>
          <StaticAutoComplete
            label={text('Label', 'Demo Static')}
            prefix={text('Prefix', 'static-ac')}
            suggestions={array('Suggestions', ['apple', 'banana', 'mango', 'pineapple', 'oranges'])}
            onChange={action('onChange')}
            onBlur={action('onBlur')}
            selectedItem={{
              value: 'mango',
              object: {name: 'reference object'}
            }}
          />
        </State>
      )
    })
  )
  .add('with hint',
    withInfo({
      inline: true,
      text: 'An Autocomplete with a static list of options (fruits)'
    })
    (() => {
      return (
        <State store={store3}>
          <StaticAutoComplete
            label={text('Label', 'Demo Static')}
            hint={text('Hint', 'Enter an Fruit')}
            prefix={text('Prefix', 'static-ac')}
            suggestions={array('Suggestions', ['apple', 'banana', 'mango', 'pineapple', 'oranges'])}
            onChange={action('onChange')}
            onBlur={action('onBlur')}
          />
        </State>
      )
    })
  )
  .add('error',
    withInfo({
      inline: true,
      text: 'An Autocomplete (required)'
    })
    (() => {
      return (
        <State store={store4}>
          <StaticAutoComplete
            label={text('Label', 'Demo Static')}
            prefix={text('Prefix', 'static-ac')}
            errorMessage={text('Error', 'Field Required')}
            suggestions={array('Suggestions', ['apple', 'banana', 'mango', 'pineapple', 'oranges'])}
            hint={text('Hint', 'Enter an fruit')}
            onBlur={(value) => (store4.set({errorMessage: value ? '' : 'Field Required'}))}
            onChange={(value) => (store4.set({value, errorMessage: ''}))}
					/>
        </State>
      )
    })
  );

