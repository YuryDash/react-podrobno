import React, {useState} from 'react';

import {Accordion} from './Accordion';
import {action} from "@storybook/addon-actions";


export default {
    title: 'ExampleAccordion',
    component: Accordion,
}

const actions = action('Accordion work')
const onClickCallback = action('some item was clicked')

export const MenuModeCollapsed = () => <Accordion onClick={onClickCallback}
                                                  callback={actions} title={'Menu'} collapsed={false} items={[]}/>;
export const GovnuModeUnCollapsed = () => <Accordion callback={actions}
                                                     title={'GOVNU'} collapsed={true}
                                                     items={[
                                                         {title: 'lolu', value: 1},
                                                         {title: 'lole', value: 2},
                                                         {title: 'lolo', value: 3},
                                                         {title: 'lola', value: 4},]}
                                                     onClick={onClickCallback}

/>;

export const ChangeMode = () => {
    const [accordion, setAccordion] = useState<boolean>(true)
    return <Accordion
        callback={() => setAccordion(!accordion)}
        title={'GOVNU'}
        collapsed={accordion}
        onClick={onClickCallback}
        items={
            [
                {title: 'lolu', value: 1},
                {title: 'lole', value: 2},
                {title: 'lolo', value: 3},
                {title: 'lola', value: 4},
            ]

        }
    />
}