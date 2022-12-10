import React, {useState} from 'react';

import {Accordion} from './Accordion';
import {action} from "@storybook/addon-actions";


export default {
  title: 'ExampleAccordion',
  component: Accordion,
}

const actions = action('Accordion work')

export const MenuModeCollapsed = () => <Accordion callback={actions} title={'Menu'} collapsed={false}  />;
export const GovnuModeUnCollapsed = () => <Accordion callback={actions} title={'GOVNU'} collapsed={true}  />;

export const ChangeMode = () => {
    const [accordion, setAccordion] = useState<boolean>(true)
  return <Accordion callback={()=>setAccordion(!accordion)} title={'GOVNU'} collapsed={accordion}  />
      }