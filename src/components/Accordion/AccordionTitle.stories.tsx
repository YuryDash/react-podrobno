import React from 'react';

import {AccordionTitle, PropsTitleType} from './Accordion';
import {action} from "@storybook/addon-actions";


export default {
    title: 'ExampleAccordion',
    component: AccordionTitle,
}

const actions = action('AccordionTitle onClick collapsed or unCollapsed body "text"')

export const AccordionTitleClick = (props: PropsTitleType) => <AccordionTitle title={'Some text for click'} callback={actions} />;

