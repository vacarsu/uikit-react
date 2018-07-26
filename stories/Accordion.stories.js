import React from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion, AccordionItem } from './../src/components/Accordion';
import { withInfo } from '@storybook/addon-info';


const stories = storiesOf( 'Components/Accordion', module );


stories.addWithJSX( 'default', () => (
    <Accordion>
        <AccordionItem title='Item 1'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et
                dolore magna aliqua.</p>
        </AccordionItem>
        <AccordionItem title='Item 2'>
            <h1>With Image</h1>
            <img src='https://cdn.stocksnap.io/img-thumbs/960w/HBB17QCV5N.jpg' alt="test image" />
        </AccordionItem>
    </Accordion>
) );


stories.addWithJSX( 'No collapsing', () => (
    <Accordion options={{ collapsible: false }}>
        <AccordionItem title='Item 1'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et
                dolore magna aliqua.</p>
        </AccordionItem>
        <AccordionItem title='Item 2'>
            <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor reprehenderit.
            </p>
        </AccordionItem>
        <AccordionItem title='Item 3'>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat proident.
            </p>
        </AccordionItem>
    </Accordion>
) );


stories.addWithJSX( 'Multiple open items', () => (
    <Accordion options={{ multiple: true }}>
        <AccordionItem title='Item 1'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et
                dolore magna aliqua.</p>
        </AccordionItem>
        <AccordionItem title='Item 2'>
            <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor reprehenderit.
            </p>
        </AccordionItem>
        <AccordionItem title='Item 3'>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
                Excepteur sint occaecat cupidatat proident.
            </p>
        </AccordionItem>
    </Accordion>
) );

stories.addWithJSX( 'Set open items', () => (
        <Accordion options={{ active: 2 }}>
            <AccordionItem title='Item 1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua.</p>
            </AccordionItem>
            <AccordionItem title='Item 2'>
                <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor reprehenderit.
                </p>
            </AccordionItem>
            <AccordionItem title='Item 3'>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat proident.
                </p>
            </AccordionItem>
        </Accordion>
    ),
);


