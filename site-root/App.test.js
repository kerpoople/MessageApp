import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, shallow } from 'enzyme';
//import Input from './input.js';
import ReactTestUtils from 'react-addons-test-utils'; // ES6

describe('Component to test', ()=>{
	it('should do something1', () =>  {
		const app = shallow(<App />);
		console.log(app.debug());
		expect(app.find('div').length).toBe(2);
	});

	it('should find <Msg />', () => {
		const appMsg = shallow(<App />);
		console.log(appMsg.debug());
		expect(appMsg.find('Msg').length).toBe(1);
	});

	it('should find two inputs', () => {
		const appInputs = shallow(<App />);
		console.log(appInputs.debug());
		expect(appInputs.find('Input').length).toBe(2);
	});
});