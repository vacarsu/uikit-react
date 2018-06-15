import * as React from 'react';
import * as Prism from 'prismjs';
import { escape } from 'he';
import marksy from 'marksy/components';
import {
    Accordion,
    AccordionItem,
    Alert,
    Article,
    Badge,
    Breadcrumb,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Link,
    Tab,
    TabContainer,
    TabContent,
    Table
} from 'uikit-react';
import { Code } from './code';

export const compile = marksy({
    createElement: React.createElement,
    highlight(language, code) {
        return Prism.highlight(code, Prism.languages.tsx);
    },
    elements: {
        table({children}) {
            return <Table divider>{children}</Table>
        }
    },
    components: {
        Accordion,
        AccordionItem,
        Alert,
        Article,
        Badge,
        Breadcrumb,
        Button,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardTitle,
        Code,
        Link,
        Tab,
        TabContainer,
        TabContent
    }
});