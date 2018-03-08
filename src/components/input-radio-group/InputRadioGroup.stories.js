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
const store5 = new Store({});
const store6 = new Store({});
const store7 = new Store({});
const store8 = new Store({});

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
		'blank - single',
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
		'pre-selected - single',
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
		'disabled - single',
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
		'error - single',
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
	)
  .add(
    'blank - multiple',
    withInfo({
      inline: true,
      text: 'A blank input radio'
    })
    (() => {
      return (
        <State store={store5}>
          <InputRadioGroup
            id={text('ID', 'blank-radio')}
            name={text('Name', 'blank-multiple')}
            options={[{label:'One', value: '1'}, {label:'Two', value: '2'}, {label:'Three', value: '3'}]}
            onChange={(value) => (store5.set({value}))}/>
        </State>
      )
    })
  )
  .add(
    'pre-selected - multiple',
    withInfo({
      inline: true,
      text: 'A pre-selected input radio'
    })
    (() => {
      return (
        <State store={store6}>
          <InputRadioGroup
            id={text('ID', 'prepopulated-radio')}
            name={text('Name', 'pre-populated-multiple')}
            options={[{label:'One', value: '1'}, {label:'Two', value: '2'}, {label:'Three', value: '3'}]}
            onChange={(value) => (store6.set({value}))}
						value={'2'}
					/>
        </State>
      )
    })
  )
  .add(
    'disabled - multiple',
    withInfo({
      inline: true,
      text: 'A pre-selected and disabled input radio'
    })
    (() => {
      return (
        <State store={store7}>
          <InputRadioGroup
            id={text('ID', 'disabled-radio')}
            name={text('Name', 'disabled-multiple')}
            options={[{label:'One', value: '1'}, {label:'Two', value: '2'}, {label:'Three', value: '3'}]}
            onChange={(value) => (store7.set({value}))}
            disabled={true}
            value={'2'}
					/>
        </State>
      )
    })
  )
  .add(
    'error - multiple',
    withInfo({
      inline: true,
      text: 'A input radio (required)'
    })
    (() => {
      return (
        <State store={store8}>
          <InputRadioGroup
            id={text('ID', 'error-radio')}
            name={text('Name', 'error-multiple')}
            options={[{label:'One', value: '1'}, {label:'Two', value: '2'}, {label:'Three', value: '3'}]}
            hint={text('Hint', 'Select the radio')}
            errorMessage={text('Error', 'Field Required')}
            onChange={(value) => (store8.set({value, errorMessage: value ? '' : 'Field Required'}))}/>
        </State>
      )
    })
  );
