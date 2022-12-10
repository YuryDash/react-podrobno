import React, {useState} from "react";

type PropsType = {
    title: string
    collapsed: boolean
    callback: ()=> void
}
const transition = {
    cursor: 'pointer',
}

export function Accordion(props: PropsType) {
    const styles = {
        backgroundColor: props.collapsed ? 'black' : 'blue',
        transitionDuration: '1s',
        color: props.collapsed ? 'yellow' : 'white',
        margin: '30px',
    }
    const onclickHandler = () => {
        props.callback()
    }
    return (<div >
            <AccordionTitle title={props.title} callback={onclickHandler}/>
            { props.collapsed && <AccordionBody/> }
        </div>
    )}

export type PropsTitleType = {
    title: string
    callback: ()=> void
}
export function AccordionTitle(props: PropsTitleType) {

    return (
        <h3 style={transition} onClick={props.callback}>{props.title}</h3>
    )
}

export function AccordionBody() {
    return (
        <ul >
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}