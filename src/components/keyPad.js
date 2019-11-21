import React from 'react'
import KeypadRow from "./KeypadRow"
import Button from "./button"


const keypad = () => (
    <section className="keypad">
        <KeypadRow>
            <Button>clear</Button>
            <Button>/</Button>
        </KeypadRow>
        <KeypadRow>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>-</Button>
        </KeypadRow>
        <KeypadRow>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>+</Button>
        </KeypadRow>
        <KeypadRow>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>=</Button>
        </KeypadRow>
    </section>
    )
export default keypad;
