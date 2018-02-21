import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, array, text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { Store, State } from "@sambego/storybook-state";
import AddressAutoComplete from "./AddressAutoComplete";
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from "../theme/defaultTheme";

const store1 = new Store({});
const store2 = new Store({});
const store3 = new Store({});

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

const story = storiesOf('input-address-autocomplete', module);
story.addDecorator(PageDecorator);
story.addDecorator(withKnobs);
story
	.add('blank',
    withInfo({
      inline: true,
      text: 'An Address Autocomplete'
    })
    (() => {
			return (
        <State store={store1}>
					<AddressAutoComplete
            label={text('Label', 'Demo Address')}
						prefix={text('Prefix', 'address-ac')}
						endpoint={text('Endpoint', 'https://localhost:7443/addresses')}
					/>
				</State>
			)
		})
	)
	.add('pre-populated',
    withInfo({
      inline: true,
      text: 'An Address Autocomplete'
    })
    (() => {
      return (
        <State store={store2}>
					<AddressAutoComplete
						label={text('Label', 'Demo Address')}
						prefix={text('Prefix', 'address-ac')}
						endpoint={text('Endpoint', 'https://localhost:7443/addresses')}
						selectedItem={{
							value: '123 My Street Melbourne',
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
      text: 'An Address Autocomplete'
    })
    (() => {
      return (
        <State store={store3}>
					<AddressAutoComplete
						label={text('Label', 'Demo Address')}
						prefix={text('Prefix', 'address-ac')}
						endpoint={text('Endpoint', 'https://localhost:7443/addresses')}
						hint={text('Hint', 'Enter an Address')}
					/>
				</State>
			)
    })
	);


