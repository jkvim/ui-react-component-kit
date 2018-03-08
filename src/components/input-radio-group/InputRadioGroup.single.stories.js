import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { State, Store } from '@sambego/storybook-state';
import { withReadme } from 'storybook-readme';
import InputRadioGroup from "./InputRadioGroup";
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from "../../theme/defaultTheme";
import README from './README.md';

const store1 = new Store({});
const store2 = new Store();
const store3 = new Store();
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

const story = storiesOf('input-radio-group - single', module);
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
					<InputRadioGroup
						id={text('ID', 'blank-radio')}
						name={text('Name', 'blank-single')}
						options={[{label:'One', value: '1'}]}
						onChange={(value) => (store1.set({value}))}
					/>
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
					<InputRadioGroup
						id={text('ID', 'prepopulated-radio')}
            name={text('Name', 'pre-populated-single')}
            options={[{label:'One', value: '1'}]}
						onChange={(value) => (store2.set({value}))}
            value={'1'}
					/>
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
					<InputRadioGroup
						id={text('ID', 'disabled-radio')}
            name={text('Name', 'disabled-single')}
            options={[{label:'One', value: '1'}]}
						onChange={(value) => (store3.set({value}))}
            value={'1'}
						disabled={true}
					/>
				</State>
			)
		})
	)
	.add(
		'error',
		withInfo({
			inline: true,
			text: 'A input radio (required)'
		})
		(() => {
		  return (
			<State store={store4}>
				<InputRadioGroup
					id={text('ID', 'error-radio')}
          name={text('Name', 'error-single')}
          options={[{label:'One', value: '1'}]}
          hint={text('Hint', 'Select the radio')}
          errorMessage={text('Error', 'Field Required')}
					onChange={(value) => (store4.set({value, errorMessage: value ? '' : 'Field Required'}))}
				/>
			</State>
		  )
		})
	);
