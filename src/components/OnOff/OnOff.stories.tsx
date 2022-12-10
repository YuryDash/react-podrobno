import React, {useState} from 'react';

import {OnOff} from './OnOff';
import {action} from "@storybook/addon-actions";


export default {
  title: 'ExampleOnOff',
  component: OnOff,
}


export const OnMode = () => <OnOff on={true} callback={action('clicked ON')} />;
export const OffMode = () => <OnOff on={false} callback={action('clicked OFF')} />;

export const ChangeMode = () => {
    const [onOff, setOnOff] = useState<boolean>(true)
  return <OnOff on={onOff} callback={()=>setOnOff(!onOff) } />
      }