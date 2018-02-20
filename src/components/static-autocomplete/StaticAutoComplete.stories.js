import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, object, array, text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { action } from '@storybook/addon-actions';
import { Store, State } from "@sambego/storybook-state";
import StaticAutoComplete from "./StaticAutoComplete";
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from "../theme/defaultTheme";

const store1 = new Store({});
const store2 = new Store({});

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

const story = storiesOf('input-static-autocomplete', module);
story.addDecorator(PageDecorator);
story.addDecorator(withKnobs);
story
	.add('static list (fruits)',
    withInfo({
      inline: true,
      text: 'An Autocomplete with a static list of options (fruits)'
    })
    (() => {
			return (
				<State store={store1}>
					<StaticAutoComplete
						prefix={text('Prefix', 'static-ac')}
						suggestions={array('Suggestions', ['apple', 'banana', 'mango', 'pineapple', 'oranges'])} />
				</State>
			)
		})
	)
	.add('static list (fruits) with on change',
		withInfo({
			inline: true,
			text: 'An Autocomplete with a static list of options (fruits) with on change'
  	})
		(() => {
			return (
				<State store={store2}>
					<StaticAutoComplete
						prefix={text('Prefix', 'static-ac')}
						suggestions={array('Suggestions', ['apple', 'banana', 'mango', 'pineapple', 'oranges'])}
						onChange={action('onChange')} />
				</State>
			)
		})
	);

