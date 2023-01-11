import React, {FocusEventHandler, useState} from "react";
import s from "./Select.module.scss"
type ArrayType = {
    title: string
    value: string
    id: number
}
type SelectType = {
//     value: boolean
    onChangeSelect: (value: string) => void
    arrayMusic:Array<ArrayType>
    valueTitle: string
}

export const Select = (props: SelectType) => {
    let [boo, setBoo] = useState(false)
    const clickClack = () => {
        setBoo(!boo)
    }
    const mappedTitle = props.arrayMusic.map( el => {
        const onClickChangeTitle = () => {
            props.onChangeSelect(el.title)
            setBoo(false)
        }
        return (
            <div className={s.names} key={el.id} onClick={onClickChangeTitle}>{el.title}</div>
        )
    } )

    return (
        <div className={s.wrapper}>

            <div className={s.title} onClick={clickClack}>{props.valueTitle}</div>
            <div className={s.s}>
            {boo && mappedTitle}
            </div>
        </div>
    )
}