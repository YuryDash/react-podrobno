import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {SelectDimych} from "./SelectDimych";

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
    component: SelectDimych,
}


export const SelectDimychWithValue = () =>

    <SelectDimych
        onChangeSelect={action('wtf')}
        arrayMusic={
            [
                {id: 1, title: 'Phonk', value: '1'},
                {id: 2, title: 'Rock', value: '2'},
                {id: 3, title: 'Rap', value: '3'},
                {id: 4, title: 'UnderGround', value: '4'},
            ]
        }
        value={'3'}
    />;

export const SelectDimychWithoutValue = () =>

    <SelectDimych
        onChangeSelect={action('wtf')}
        arrayMusic={
            [
                {id: 1, title: 'Phonk', value: '1'},
                {id: 2, title: 'Rock', value: '2'},
                {id: 3, title: 'Rap', value: '3'},
                {id: 4, title: 'UnderGround', value: '4'},
            ]
        }
    />;

