import React, {useState} from 'react';

import {Accordion, AccordionBody} from './Accordion';
import {action} from "@storybook/addon-actions";


export default {
    title: 'ExampleAccordion',
    component: AccordionBody,
}

const actions = action('Accordion work')

export const AccordionBodyText = () => <AccordionBody />;


