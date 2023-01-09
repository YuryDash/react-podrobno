import React, {useState} from "react";

// type ArrayType = {
//     title: string
//     value: boolean
// }
// type SelectType = {
//     value: boolean
//     onChangeSelect: (value: any) => void
//     array:Array<ArrayType>
// }

export const Select = () => {
    let [boo, setBoo] = useState(true)
    return (
        <>
        <div>This is TITLE!!!</div>
            {boo && <div>lol</div>}
        </>
    )
}