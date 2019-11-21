import React from 'react'
import KeypadRow from "./KeypadRow"
import Button from "./Button"
import LargeButton from "./LargeButton";

const keypad = (props) => (
    <section className="keypad">
        <KeypadRow>
            <LargeButton onButtonPress={props.onButtonPress}>clear</LargeButton>
            <Button type="operator" onButtonPress={props.onButtonPress}>/</Button>
        </KeypadRow>
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>1</Button>
            <Button onButtonPress={props.onButtonPress}>2</Button>
            <Button onButtonPress={props.onButtonPress}>3</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>-</Button>
        </KeypadRow>
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>4</Button>
            <Button onButtonPress={props.onButtonPress}>5</Button>
            <Button onButtonPress={props.onButtonPress}>6</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>+</Button>
        </KeypadRow>
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>7</Button>
            <Button onButtonPress={props.onButtonPress}>8</Button>
            <Button onButtonPress={props.onButtonPress}>9</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>=</Button>
        </KeypadRow>
    </section>
    )
export default keypad;
