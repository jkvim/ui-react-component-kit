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

const story = storiesOf('AddressAutoComplete', module);
story.addDecorator(PageDecorator);
story.addDecorator(withKnobs);
story
	.add('Address Auto Complete (blank)',
    withInfo({
      inline: true,
      text: 'An Address Autocomplete'
    })
    (() => {
			return (
        <State store={store1}>
					<AddressAutoComplete
						prefix={text('Prefix', 'address-ac')}
						endpoint={text('Endpoint', 'https://localhost:7443')}
						apiKey={text('API Key', 'bc7ec72782be4e06bf1ebfe90b194f92')}
					/>
				</State>
			)
		})
	)
	.add('Address Auto Complete (Pre-populated)',
    withInfo({
      inline: true,
      text: 'An Address Autocomplete'
    })
    (() => {
      return (
        <State store={store2}>
					<AddressAutoComplete
						prefix={text('Prefix', 'address-ac')}
						endpoint={text('Endpoint', 'https://localhost:7443')}
						apiKey={text('API Key', 'bc7ec72782be4e06bf1ebfe90b194f92')}
						selectedItem={{
							value: '111 My Street Melbourne',
							object: {name: 'reference object'}
						}}
					/>
				</State>
			)
    })
	)
	.add('Address Auto Complete with HINT',
    withInfo({
      inline: true,
      text: 'An Address Autocomplete'
    })
    (() => {
      return (
        <State store={store3}>
					<AddressAutoComplete
						label={text('Label', 'Address')}
						prefix={text('Prefix', 'address-ac')}
						endpoint={text('Endpoint', 'https://localhost:7443')}
						apiKey={text('API Key', 'bc7ec72782be4e06bf1ebfe90b194f92')}
						hint={text('Hint', 'Domestic Address Only')}
					/>
				</State>
			)
    })
	);


