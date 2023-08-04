import React from 'react';
import Button from "../button/Button";
import "./num-frame.scss";
import "./calc-frame.scss";
import "./text-result.scss";
import Calculator from "../../models/Calculator";

interface CalcFrameProps {
    calc: Calculator;

}

interface CalcFrameState {
}



export default class CalcFrame extends React.Component<CalcFrameProps, CalcFrameState> {
    constructor(props: CalcFrameProps) {
        super(props);
    }
    render() {
        let frame = this.createFrame();
        return (
            <div className="calc-frame">
                {frame}
            </div>
        )
    }

    createFrame() {
        let me = this;
        let nums:JSX.Element[] = [];
        for (let i = 1; i < 10; i++) {
            nums.push(<Button calc={me.props.calc}  number={i}>{i}</Button>)
        }
        nums.push(<Button calc={me.props.calc} number={0}>0</Button>);
        nums.push(<Button calc={me.props.calc} clear={true}>C</Button>);
        nums.push(<Button calc={me.props.calc} equals={true}>=</Button>);
        nums.push(<Button calc={me.props.calc} operation='+'>+</Button>);
        nums.push(<Button calc={me.props.calc} operation='-'>-</Button>);
        nums.push(<Button calc={me.props.calc} operation='/'>/</Button>);
        nums.push(<Button calc={me.props.calc} operation='*'>*</Button>);
        return (<div className="num-frame">
            <h1 className="text-result"></h1>
            {nums}
        </div>);
    }
}
