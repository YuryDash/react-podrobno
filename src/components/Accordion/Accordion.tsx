import React, {useState} from "react";

type PropsType = {
    title: string
    collapsed: boolean
    callback: ()=> void
    items: Array<ItemType>
    onClick: (value: any) => void

}
const transition = {
    cursor: 'pointer',
}
type ItemType = {
    title: string
    value: any
}



//================================== ACCORDION =====================================
export function Accordion(props: PropsType) {

    const onclickHandler = () => props.callback()

    return (<div >
            <AccordionTitle title={props.title} callback={onclickHandler}/>
            { props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
        </div>
    )}
















//================================== TITLE =====================================
export type PropsTitleType = {
    title: string
    callback: ()=> void
}
export function AccordionTitle(props: PropsTitleType) {
    return (
        <h3 style={transition} onClick={props.callback}>{props.title}</h3>
    )
}
//================================== BODY =====================================
type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}
export function AccordionBody(props:AccordionBodyType) {
    console.log(props.items)
    return (
        <ul>
            {props.items.map( (el,index) => <li onClick={()=>{ props.onClick(el.value) }} key={index}>{el.title}</li>)}
        </ul>
    )
}