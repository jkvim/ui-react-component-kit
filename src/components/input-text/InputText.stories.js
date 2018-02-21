import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import { withReadme } from 'storybook-readme';
import InputText from "./InputText";
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from "../theme/defaultTheme";
import README from './README.md';

const store1 = new Store({});
const store2 = new Store({
  value: 'Pre-populated'
});
const store3 = new Store({
  value: 'Pre-populated and disabled'
});
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

const story = storiesOf('input-text', module);
story.addDecorator(PageDecorator);
story.addDecorator(withKnobs);
story.addDecorator(withReadme(README));
story
	.add(
		'blank',
		withInfo({
			inline: true,
	  		text: 'A blank input field'
		})
		(() => {
			return (
				<State store={store1}>
					<InputText
						id={text('ID', 'blank-input')}
						label={text('Label', 'Demo Input')}
						onBlur={action('onBlur')}
						onChange={(value) => (store1.set({value}))}
						onKeyDown={action('onKeyDown')}/>
				</State>
			)
		})
	)
	.add(
		'pre-populated',
		withInfo({
			inline: true,
      		text: 'A pre-populated input field'
    	})
		(() => {
			return (
				<State store={store2}>
					<InputText
						id={text('ID', 'prepopulated-input')}
						label={text('Label', 'Demo Input')}
						placeholder={text('Placeholder', 'Enter Text')}
						onBlur={action('onBlur')}
						onChange={(value) => (store2.set({value}))}
						onKeyDown={action('onKeyDown')}/>
				</State>
			)
		})
	)
	.add(
		'disabled',
    	withInfo({
			inline: true,
      		text: 'A disabled input field'
    	})
		(() => {
			return (
				<State store={store3}>
					<InputText
						id={text('ID', 'disabled-input')}
						label={text('Label', 'Demo Input')}
						onBlur={action('onBlur')}
						onChange={(value) => (store3.set({value}))}
						onKeyDown={action('onKeyDown')}
						disabled={true}/>
				</State>
			)
		})
	)
	.add(
		'validated',
		withInfo({
			inline: true,
			text: 'A validated input field (required)'
		})
		(() => {
		  return (
			<State store={store4}>
				<InputText
					id={text('ID', 'validated-input')}
					label={text('Label', 'Demo Input')}
					placeholder={text('Placeholder', 'Enter Text')}
					onBlur={(value) => store4.set({errorMessage: value ? '' : 'Field Required'})}
					onChange={(value) => (store4.set({value, errorMessage: ''}))}
					onKeyDown={action('onKeyDown')}/>
			</State>
		  )
		})
	);
