import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { State, Store } from '@sambego/storybook-state';
import { withReadme } from 'storybook-readme';
import InputCheckbox from "./InputCheckbox";
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from "../../theme/defaultTheme";
import README from './README.md';

const store1 = new Store({});
const store2 = new Store({
  value: true
});
const store3 = new Store({
  value: true
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

const story = storiesOf('input-checkbox', module);
story.addDecorator(PageDecorator);
story.addDecorator(withKnobs);
story.addDecorator(withReadme(README));
story
	.add(
		'blank',
		withInfo({
			inline: true,
	  		text: 'A blank input checkbox'
		})
		(() => {
			return (
				<State store={store1}>
					<InputCheckbox
						id={text('ID', 'blank-checkbox')}
						label={text('Label', 'Demo Checkbox')}
						onChange={(value) => (store1.set({value}))}/>
				</State>
			)
		})
	)
	.add(
		'pre-selected',
		withInfo({
			inline: true,
      		text: 'A pre-selected input checkbox'
    	})
		(() => {
			return (
				<State store={store2}>
					<InputCheckbox
						id={text('ID', 'prepopulated-checkbox')}
						label={text('Label', 'Demo Checkbox')}
						onChange={(value) => (store2.set({value}))}/>
				</State>
			)
		})
	)
	.add(
		'disabled',
    	withInfo({
			inline: true,
      		text: 'A pre-selected and disabled input checkbox'
    	})
		(() => {
			return (
				<State store={store3}>
					<InputCheckbox
						id={text('ID', 'disabled-checkbox')}
						label={text('Label', 'Demo Checkbox')}
						onChange={(value) => (store3.set({value}))}
						disabled={true}/>
				</State>
			)
		})
	)
	.add(
		'error',
		withInfo({
			inline: true,
			text: 'A input checkbox (required)'
		})
		(() => {
		  return (
			<State store={store4}>
				<InputCheckbox
					id={text('ID', 'error-checkbox')}
					label={text('Label', 'Demo Checkbox')}
          hint={text('Hint', 'Select the checkbox')}
          errorMessage={text('Error', 'Field Required')}
					onChange={(value) => (store4.set({value, errorMessage: value ? '' : 'Field Required'}))}/>
			</State>
		  )
		})
	);
