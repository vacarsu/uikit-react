import * as React from 'react';
import marksy from 'marksy/components';
import { Accordion } from '../../components/Accordion/Accordion';
import { AccordionItem } from '../../components/Accordion/AccordionItem';
import { Tab } from '../../components/Tab/Tab';
import { TabContainer } from '../../components/Tab/TabContainer';
import { TabContent } from '../../components/Tab/TabContent';
import { Table } from '../../components/Table/Table';

export const compile = marksy({
    createElement: React.createElement,
    elements: {
        table({children}) {
            return <Table>{children}</Table>
        }
    },
    components: {
        Accordion,
        AccordionItem,
        Tab,
        TabContainer,
        TabContent,
    }
});