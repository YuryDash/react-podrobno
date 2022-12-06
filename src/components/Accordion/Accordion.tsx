import React, {useState} from "react";

type PropsType = {
    title: string
    // collapsed?: boolean
    callback?: ()=> void
}
const transition = {
cursor: 'pointer',
}

export function Accordion(props: PropsType) {
    let [collapsed, setCollapsed] = useState(false)

    const styles = {
        backgroundColor: collapsed ? 'black' : 'blue',
        transitionDuration: '1s',
        color: collapsed ? 'yellow' : 'white',
        margin: '30px',
    }
    const onclickHandler = () => {
        setCollapsed(!collapsed)
    }
return (<div >
        <AccordionTitle title={props.title} callback={onclickHandler}/>
        { collapsed && <AccordionBody/> }
    </div>
)}

function AccordionTitle(props: PropsType) {

    return (
        <h3 style={transition} onClick={props.callback}>{props.title}</h3>
)
}

function AccordionBody() {
    return (
        <ul >
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}