import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import Select from "./Select";
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from "../theme/defaultTheme";

const store1 = new Store({});

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

const story = storiesOf('select', module);
story.addDecorator(PageDecorator);
story.addDecorator(withKnobs);
story
	.add(
		'select (with options)',
		withInfo({
			inline: true,
			text: 'A select field with options'
		})
		(() => {
			return (
				<State store={store1}>
					<Select
						id={text('ID', 'select-options')}
						label={text('Label', 'Demo Select')}
						onBlur={action('onBlur')}
						onChange={(value) => (store1.set({value}))}
						options={[{ display: 'Display 1', value: 'Test 1'}, { display: 'Display 2', value: 'Test 2'}, { display: 'Display 3', value: 'Test 3'}]}
					/>
				</State>
			)
		})
	);
