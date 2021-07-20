import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  }),

  it('should get 5 from add 1 and 4', () => {
    const button4 = container.find('#number4');
    const button1 = container.find('#number1');
    const buttonAdd = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    buttonAdd.simulate('click');
    button1.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5')
  }),

  it('should get 3 from subtract 4 from 7', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  }),

  it('should get 15 from multiply 3 and 5', () => {
    const button5 = container.find('#number5');
    const button3 = container.find('#number3');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button5.simulate('click');
    buttonMultiply.simulate('click');
    button3.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15')
  }),

  it('should get 3 from divide 21 by 7', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  }),

  it('should concat consecutive numbers instead of changing running total', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    button7.simulate('click');
    expect(runningTotal.text()).toEqual('47');
  }),

  it('should be able to chain multiple operators', () => {
    const button4 = container.find('#number4');
    const buttonMultiply = container.find('#operator-multiply');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    buttonMultiply.simulate('click');
    buttonMultiply.simulate('click');
    expect(runningTotal.text()).toEqual('16');
  }),

  it('should be able to clear the running total without affecting the calculation', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    const buttonClear = container.find('#clear');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    buttonMultiply.simulate('click');
    buttonClear.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('28');
  })

})

