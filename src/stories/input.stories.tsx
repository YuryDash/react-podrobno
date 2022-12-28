import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

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
            </button>
            - actual value: {value}
        </>
    )
}
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <>
        <input type="text" value={parentValue} onChange={onChange}/>
    </>
}


export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <>
        <input type="checkbox" checked={parentValue} onChange={onChange}/>
    </>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('3')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <>
        <select  value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value="1">Warsaw</option>
            <option value="2">Cyprus</option>
            <option value="3">Georgia</option>
        </select>
    </>
}
