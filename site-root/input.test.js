import React from 'react';
import Input from './input';
import ReactDOM from 'react-dom';
import { render, shallow } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils'; // ES6


describe('Input testprogram', () => {
	const inputkoden = shallow(<Input/>);

	var props = { update : function(nothing) { return 0; } };
	var input_class = new Input(props);
	
	test('Checking that div has been generated', () => {
		expect(inputkoden).toBeDefined();
	});
	test('Test Enter-key', () => {

		var event1 = { charCode : 13, shiftKey : false };
		expect(input_class.handleKeyPress(event1)).toBe(true);
	});
	test('Test Non-Enter key', () => {

		var event2 = { charCode : 11, shiftKey : false };
		expect(input_class.handleKeyPress(event2)).toBe(false);
	});
	test('Test Shift-Enter', () => {
		var event3 = { charCode : 13, shiftKey : true };
		expect(input_class.handleKeyPress(event3)).toBe(false);
	});
});

describe('Component to test', ()=>{
	it('should do something', () =>  {
		const input = shallow(<Input />);
		console.log(input.debug());
		expect(input.find('div').length).toBe(1);
	});
	
});