import React, {useState} from "react";

const transition = {
    cursor: 'pointer',
}

export function UncontrolledRating() {
    let [like, setLike] = useState(0)

    return (
        <div>
            <Star selected={like > 0} callback={() => setLike(1)}/>
            <Star selected={like > 1} callback={() => setLike(2)}/>
            <Star selected={like > 2} callback={() => setLike(3)}/>
            <Star selected={like > 3} callback={() => setLike(4)}/>
            <Star selected={like > 4} callback={() => setLike(5)}/>
        </div>
    )
}

type  StarPropsType = {
    selected: boolean
    callback?: () => void
}
const Star = (props: StarPropsType) => props.selected ?
    <span style={transition} onClick={props.callback}><b>star </b></span> :
    <span style={transition} onClick={props.callback}>star </span>
