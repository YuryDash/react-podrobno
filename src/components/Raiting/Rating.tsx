import React from "react";

const  cursor = {
    cursor: 'pointer',
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

 type RatingPropsType = {
    value: RatingValueType
     changeStatus: (num:RatingValueType)=> void
}
type StarPropsType = {
    selected: boolean
    onClick: () => void
}
export function Rating(props:RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} onClick={()=>props.changeStatus(1)}/>
            <Star selected={props.value > 1} onClick={()=>props.changeStatus(2)}/>
            <Star selected={props.value > 2} onClick={()=>props.changeStatus(3)}/>
            <Star selected={props.value > 3} onClick={()=>props.changeStatus(4)}/>
            <Star selected={props.value > 4} onClick={()=>props.changeStatus(5)}/>
        </div>
    )
}

function Star(props:StarPropsType) {
    return(
        <span style={cursor} onClick={props.onClick}>{props.selected ? <b>star </b> : 'star '}</span>
    )
}