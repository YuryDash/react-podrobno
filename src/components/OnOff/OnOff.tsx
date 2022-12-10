import React, {useState} from "react";

export type OnOffPropsType = {
    on: boolean
    callback: (boo:boolean)=> void
}


export function OnOff(props: OnOffPropsType) {

    const replacement = (boo: boolean) => {
        props.callback(boo)
    }

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
        backgroundColor: props.on ? 'greenYellow' : 'white',
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
        backgroundColor: props.on ? 'white' : 'red',
        transitionDuration: '1s',
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: props.on ? '1px solid greenYellow' : '1px solid red',
        backgroundColor: props.on ? 'greenYellow' : 'red',
        boxShadow: props.on ? '1px 1px 20px 5px greenYellow' : '1px 1px 20px 5px red',
        transitionDuration: '1s',
    }

    return (
        <div style={wrapper}>
            <div onClick={()=>replacement(true)} style={onStyle}>ON</div>
            <div onClick={()=>replacement(false)} style={offStyle}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}