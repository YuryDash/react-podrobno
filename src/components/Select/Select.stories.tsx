import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

// type ArrayType = {
//     title: string
//     value: boolean
// }
// type SelectType = {
//     value: boolean
//     onChangeSelect: (value: any) => void
//     array:Array<ArrayType>
// }
export default {
    title: 'ExampleSelect',
    component: Select,
}


export const BaseExample = () =>

    <Select
        onChangeSelect={action('wtf')}
        arrayMusic={
            [
                {id: 1, title: 'Phonk', value: '1'},
                {id: 2, title: 'Rock', value: '2'},
                {id: 3, title: 'Rap', value: '3'},
                {id: 4, title: 'UnderGround', value: '4'},
            ]
        }
        valueTitle={'title'}
    />;



