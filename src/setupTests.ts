/*
 * https://github.com/facebookincubator/create-react-app/issues/3199
*/
global.requestAnimationFrame = function(callback: () => void): void {
  setTimeout(callback, 0);
};

import { configure } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });
