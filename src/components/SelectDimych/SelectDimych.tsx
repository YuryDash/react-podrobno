import React, {FocusEventHandler, useState} from "react";
import s from "./SelectDimych.module.scss"
type ArrayType = {
    title: string
    value: string
    id: number
}
type SelectType = {
//     value: boolean
    onChangeSelect: (value: string) => void
    arrayMusic:Array<ArrayType>
    value?: any
}
export const SelectDimych = (props:SelectType) => {

    const selectedItem = props.arrayMusic.find( el => el.value === props.value )

    return (
        <div className={s.wrapper}>
           <h3>{selectedItem && selectedItem.title}</h3>
            {props.arrayMusic.map( el => <div key={el.id}> {el.title} </div> )}
        </div>
    )
}