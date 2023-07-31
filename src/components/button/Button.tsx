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
                        let text = document.querySelector('.text-result');
                        if (text === null) return;
                        if (text.textContent === null) return;
                        if (me.props.number || me.props.number == 0) {
                            if (me.props.calc.operation === '') {
                                me.props.calc.changeFirstNumber(me.props.number);
                            } else {
                                me.props.calc.changeSecondNumber(me.props.number);
                            }
                            if (text.textContent == '' && me.props.number == 0) {
                                return;
                            }
                            text.textContent += me.props.number;
                        }
                        if (me.props.operation) {
                            text.textContent = '';
                            me.props.calc.operation = me.props.operation;
                        }
                        if (me.props.equals) {
                            let res = me.props.calc.count();
                            me.props.calc.operation = '';
                            text.textContent = res === undefined ? null : res.toString();
                        }
                    }}>{this.props.children}
                </button>
            </div>);
    }
}

