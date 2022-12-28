import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
  title: 'ExampleUncontrolledAccordion',
  component: UncontrolledAccordion,
}

export const MenuModeCollapsed = () => <UncontrolledAccordion title={'This is props UncontrolledAccordionTitle'}/>;
