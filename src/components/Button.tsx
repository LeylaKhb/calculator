import React, {useState} from 'react';
import "./button.scss";
import ButtonInterface from "./ButtonInterface";


interface ButtonProps {
    children?: any,
    onClick?: (_action: any) => void;
}

interface ButtonState {
    count: number;
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        let me = this;
        return (
            <div>
                <button
                    onClick={(_e: React.MouseEvent<HTMLButtonElement>) => {
                        ;
                    }}>{this.props.children}
                </button>
            </div>);
    }

}

