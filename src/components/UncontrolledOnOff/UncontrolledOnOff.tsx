import React, {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export type PropsType = {
    // on: boolean
    defaultOn?: boolean
}



export function UncontrolledOnOff(props: PropsType) {


    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    let [offOn, setOffOn] = useState(on)
    const wrapper = {
        display: 'flex',
        alignItems: 'center',
        padding: '30px'
    }
    const onStyle = {
        width: '100px',
        height: '40px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: offOn ? 'greenYellow' : 'white',
        cursor: 'pointer',
        transitionDuration: '1s',
    }
    const offStyle = {
        width: '100px',
        height: '40px',
        border: '1px solid black',
        borderRadius: '5px',
        margin: '0 15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: offOn ? 'white' : 'red',
        transitionDuration: '1s',
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: offOn ? '1px solid greenYellow' : '1px solid red',
        backgroundColor: offOn ? 'greenYellow' : 'red',
        boxShadow: offOn ? '1px 1px 20px 5px greenYellow' : '1px 1px 20px 5px red',
        transitionDuration: '1s',
    }

    const onClickHandler = () => {
        setOffOn(true)
    }
    const onClickHandlerOff = () => {
        setOffOn(false)
    }
    return (
        <div style={wrapper}>
            <div onClick={onClickHandler} style={onStyle}>ON</div>
            <div onClick={onClickHandlerOff} style={offStyle}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}