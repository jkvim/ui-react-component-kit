import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { State, Store } from '@sambego/storybook-state';
import { withReadme } from 'storybook-readme';
import InputRadio from "./InputRadio";
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

const story = storiesOf('input-radio', module);
story.addDecorator(PageDecorator);
story.addDecorator(withKnobs);
story.addDecorator(withReadme(README));
story
	.add(
		'blank',
		withInfo({
			inline: true,
	  		text: 'A blank input radio'
		})
		(() => {
			return (
				<State store={store1}>
					<InputRadio
						id={text('ID', 'blank-radio')}
						label={text('Label', 'Demo Radio')}
						onChange={(value) => (store1.set({value}))}/>
				</State>
			)
		})
	)
	.add(
		'pre-selected',
		withInfo({
			inline: true,
      		text: 'A pre-selected input radio'
    	})
		(() => {
			return (
				<State store={store2}>
					<InputRadio
						id={text('ID', 'prepopulated-radio')}
						label={text('Label', 'Demo Radio')}
						onChange={(value) => (store2.set({value}))}/>
				</State>
			)
		})
	)
	.add(
		'disabled',
    	withInfo({
			inline: true,
      		text: 'A pre-selected and disabled input radio'
    	})
		(() => {
			return (
				<State store={store3}>
					<InputRadio
						id={text('ID', 'disabled-radio')}
						label={text('Label', 'Demo Radio')}
						onChange={(value) => (store3.set({value}))}
						disabled={true}/>
				</State>
			)
		})
	)
	.add(
		'validated',
		withInfo({
			inline: true,
			text: 'A validated input radio (required)'
		})
		(() => {
		  return (
			<State store={store4}>
				<InputRadio
					id={text('ID', 'validated-radio')}
					label={text('Label', 'Demo Radio')}
          errorMessage={text('Error', 'Field Required')}
					onChange={(value) => (store4.set({value}))}/>
			</State>
		  )
		})
	);
