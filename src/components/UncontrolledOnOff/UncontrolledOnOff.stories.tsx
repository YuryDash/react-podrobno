import React, {useState} from 'react';

import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";


export default {
  title: 'Example UncontrolledOnOff',
  component: UncontrolledOnOff,
}

export const OnMode = () => <UncontrolledOnOff defaultOn={true}/>;
export const OffMode = () => <UncontrolledOnOff defaultOn={false}/>;
