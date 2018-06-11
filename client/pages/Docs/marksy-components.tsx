import * as React from 'react';
import * as Prism from 'prismjs';
import { escape } from 'he';
import marksy from 'marksy/components';
import { Accordion } from '../../components/Accordion/Accordion';
import { AccordionItem } from '../../components/Accordion/AccordionItem';
import { Alert } from '../../components/Alert/Alert';
import { Code } from './code';
import { Tab } from '../../components/Tab/Tab';
import { TabContainer } from '../../components/Tab/TabContainer';
import { TabContent } from '../../components/Tab/TabContent';
import { Table } from '../../components/Table/Table';

export const compile = marksy({
    createElement: React.createElement,
    // highlight() {
    //     return Prism.highlightAll();
    // },
    elements: {
        table({children}) {
            return <Table>{children}</Table>
        }
    },
    components: {
        Accordion,
        AccordionItem,
        Alert,
        Code,
        Tab,
        TabContainer,
        TabContent,
    }
});