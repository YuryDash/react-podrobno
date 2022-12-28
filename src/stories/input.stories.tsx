import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const ControlledInputWithFixedValue = () => <input value={'yo yo yo'}/>

export const TrackedValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    return (

        <>
            <input value={value} onChange={onChangeInput}/> - {value}
        </>
    )
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickSaveHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
     return (
        <>
            <input ref={inputRef} id={'inputID'}/>

            <button onClick={onClickSaveHandler}>save
            </button> - actual value: {value}
        </>
    )
}

