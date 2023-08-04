import React from 'react';

export default class Calculator {
    get result(): number {
        return this._result;
    }

    set result(value: number) {
        this._result = value;
    }
    get operation(): string {
        return this._operation;
    }

    set operation(value: string) {
        this._operation = value;
    }
    get firstNumber(): number {
        return this._firstNumber;
    }

    set firstNumber(value: number) {
        this._firstNumber = value;
    }


    get secondNumber(): number {
        return this._secondNumber;
    }

    set secondNumber(value: number) {
        this._secondNumber = value;
    }

    private _firstNumber: number;
    private _secondNumber: number;
    private _operation: string;
    private _result: number;
    constructor() {
        this._firstNumber = 0;
        this._secondNumber = 0;
        this._operation = '';
        this._result = 0;
    }

    count() {
        let text = document.querySelector('.text-result');
        if (text === null) return;
        if (text.textContent === null) return;
        this._result = 0;
        switch (this._operation) {
            case '+': {
                this._result = this._firstNumber + this._secondNumber;
                break;
            }
            case '-': {
                this._result = this._firstNumber - this._secondNumber;
                break;
            }
            case '/': {
                this._result = this._firstNumber / this._secondNumber;
                if (this._result.toString().length > 10)
                    this._result = +(this._result.toString().slice(0,10));
                break;
            }
            case '*': {
                this._result = this._firstNumber * this._secondNumber;
                break;
            }
        }
        this._firstNumber = this._result;
        this._secondNumber = 0;
        return this._result;
    }

    changeFirstNumber(newNumber: number) {
        this._firstNumber = this._firstNumber * 10 + newNumber;
    }

    changeSecondNumber(newNumber: number) {
        this._secondNumber = this._secondNumber * 10 + newNumber;
    }

    clear() {
        this._firstNumber = 0;
        this._result = 0;
        this._secondNumber = 0;
        this._operation = '';
    }
}