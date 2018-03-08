import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { State, Store } from '@sambego/storybook-state';
import { withReadme } from 'storybook-readme';
import InputCheckboxGroup from "./InputCheckboxGroup";
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from "../../theme/defaultTheme";
import README from './README.md';

const store1 = new Store({});
const store2 = new Store({});
const store3 = new Store({});
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

const story = storiesOf('input-checkbox-group', module);
story.addDecorator(PageDecorator);
story.addDecorator(withKnobs);
story.addDecorator(withReadme(README));
story
	.add(
		'blank - single',
		withInfo({
			inline: true,
	  		text: 'A blank input checkbox'
		})
		(() => {
			return (
				<State store={store1}>
					<InputCheckboxGroup
						id={text('ID', 'blank-checkbox')}
						name={text('Name', 'blank-single')}
						options={[{label: 'One', value: '1'}]}
						onChange={
              (values, value) => {
                if(values.includes(value)) {
                  values = values.filter(item => item !== value);
                } else {
                  values.push(value)
                }

                store1.set({values: values})
              }
            }
					/>
				</State>
			)
		})
	)
	.add(
		'pre-selected - single',
		withInfo({
			inline: true,
      		text: 'A pre-selected input checkbox'
    	})
		(() => {
			return (
				<State store={store2}>
					<InputCheckboxGroup
						id={text('ID', 'pre-populated-checkbox')}
            name={text('Name', 'pre-populated-single')}
            options={[{label: 'One', value: '1'}]}
            onChange={
              (values, value) => {
                if(values.includes(value)) {
                  values = values.filter(item => item !== value);
                } else {
                  values.push(value)
                }

                store2.set({values: values})
              }
            }
						values={['1']}
					/>
				</State>
			)
		})
	)
	.add(
		'disabled - single',
    	withInfo({
			inline: true,
      		text: 'A pre-selected and disabled input checkbox'
    	})
		(() => {
			return (
				<State store={store3}>
					<InputCheckboxGroup
						id={text('ID', 'disabled-checkbox')}
            name={text('Name', 'disabled-single')}
            options={[{label: 'One', value: '1'}]}
            onChange={
              (values, value) => {
                if(values.includes(value)) {
                  values = values.filter(item => item !== value);
                } else {
                  values.push(value)
                }

                store3.set({values: values})
              }
            }
            values={['1']}
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
			text: 'A input checkbox (required)'
		})
		(() => {
		  return (
			<State store={store4}>
				<InputCheckboxGroup
					id={text('ID', 'error-checkbox')}
          name={text('Name', 'error-single')}
          options={[{label: 'One', value: '1'}]}
          hint={text('Hint', 'Select the checkbox')}
          errorMessage={text('Error', 'Field Required')}
          onChange={
            (values, value) => {
              const containsValue = values.includes(value);

              if(containsValue) {
                values = values.filter(item => item !== value);
              } else {
                values.push(value)
              }

              store4.set({values: values, errorMessage: containsValue ? '' : 'Field Required'})
            }
          }
				/>
			</State>
		  )
		})
	)
  .add(
    'blank - multiple',
    withInfo({
      inline: true,
      text: 'A blank input checkbox'
    })
    (() => {
      return (
        <State store={store5}>
          <InputCheckboxGroup
            id={text('ID', 'blank-checkbox')}
            name={text('Name', 'blank-multiple')}
            options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
            onChange={
              (values, value) => {
                if(values.includes(value)) {
                  values = values.filter(item => item !== value);
                } else {
                  values.push(value)
                }

                store5.set({values: values})
              }
            }
          />
        </State>
      )
    })
  )
  .add(
    'pre-selected - multiple',
    withInfo({
      inline: true,
      text: 'A pre-selected input checkbox'
    })
    (() => {
      return (
        <State store={store6}>
          <InputCheckboxGroup
            id={text('ID', 'pre-populated-checkbox')}
            name={text('Name', 'pre-populated-multiple')}
            options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
            onChange={
              (values, value) => {
                if(values.includes(value)) {
                  values = values.filter(item => item !== value);
                } else {
                  values.push(value)
                }

                store6.set({values: values})
              }
            }
            values={['2', '3']}
          />
        </State>
      )
    })
  )
  .add(
    'disabled - multiple',
    withInfo({
      inline: true,
      text: 'A pre-selected and disabled input checkbox'
    })
    (() => {
      return (
        <State store={store7}>
          <InputCheckboxGroup
            id={text('ID', 'disabled-checkbox')}
            name={text('Name', 'disabled-multiple')}
            options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
            onChange={
              (values, value) => {
                if(values.includes(value)) {
                  values = values.filter(item => item !== value);
                } else {
                  values.push(value)
                }

                store7.set({values: values})
              }
            }
            disabled={true}
            values={['2']}
          />
        </State>
      )
    })
  )
  .add(
    'error - multiple',
    withInfo({
      inline: true,
      text: 'A input checkbox (required)'
    })
    (() => {
      return (
        <State store={store8}>
          <InputCheckboxGroup
            id={text('ID', 'error-checkbox')}
            name={text('Name', 'error-multiple')}
            options={[{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}]}
            hint={text('Hint', 'Select the checkbox')}
            errorMessage={text('Error', 'Field Required')}
            onChange={
              (values, value) => {
                const containsValue = values.includes(value);

                if(containsValue) {
                  values = values.filter(item => item !== value);
                } else {
                  values.push(value)
                }

                store8.set({values: values, errorMessage: containsValue ? '' : 'Field Required'})
              }
            }
          />
        </State>
      )
    })
  );
