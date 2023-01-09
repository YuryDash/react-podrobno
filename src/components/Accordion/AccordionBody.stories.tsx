import React, {useState} from 'react';

import {Accordion, AccordionBody} from './Accordion';
import {action} from "@storybook/addon-actions";


export default {
    title: 'ExampleAccordion',
    component: AccordionBody,
}

const actions = action('Accordion work')

export const AccordionBodyText = () => <AccordionBody items={[
    {title: 'lolu', value: 1},
    {title: 'lole', value: 2},
    {title: 'lolo', value: 3},
    {title: 'lola', value: 4},]}
onClick={actions}/>;


