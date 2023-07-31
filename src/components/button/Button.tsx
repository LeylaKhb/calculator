import React, {useState} from 'react';
import "./button.scss";
import Calculator from "../../services/Calculator";


interface ButtonProps {
    children: any,
    onClick?: (_action: any) => void;
    operation?: string;
    number?: number;
    equals?: boolean;
    clear?: boolean;
    calc: Calculator;
}

interface ButtonState {
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);
    }
    render() {
        let me = this;
        return (
            <div>
                <button
                    onClick={(_e: React.MouseEvent<HTMLButtonElement>) => {
                        let calculator = me.props.calc;
                        let number = me.props.number;
                        let text = document.querySelector('.text-result');
                        if (text === null) return;
                        if (text.textContent === null) return;
                        if (number || number == 0) {
                            if ((calculator.firstNumber === calculator.result) && (calculator.operation == '')) {
                                text.textContent = '';
                                calculator.firstNumber = 0;
                            }
                            if (calculator.operation === '') calculator.changeFirstNumber(number);
                            else calculator.changeSecondNumber(number);

                            if (text.textContent == '' && number == 0) return;
                            if ((calculator.operation !== '') && (calculator.firstNumber === calculator.result) && (calculator.secondNumber === 0))
                                text.textContent = '';
                            text.textContent += number;
                        }
                        if (me.props.operation) {
                            calculator.operation = me.props.operation;
                            if (calculator.secondNumber != 0) {
                                let res = calculator.count();
                                text.textContent = res === undefined ? null : res.toString();
                            } else {
                                text.textContent = '';
                            }
                            }
                        if (me.props.equals) {
                            let res = calculator.count();
                            calculator.operation = '';
                            text.textContent = res === undefined ? null : res.toString();
                        }
                        if (me.props.clear) {
                            text.textContent = '';
                            calculator.clear();
                        }
                    }}>{this.props.children}
                </button>
            </div>);
    }
}

