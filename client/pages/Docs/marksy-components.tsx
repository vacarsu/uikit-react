import * as React from 'react';
import * as Prism from 'prismjs';
import { escape } from 'he';
import marksy from 'marksy/components';
import { Accordion } from '../../../src/components/Accordion/Accordion';
import { AccordionItem } from '../../../src/components/Accordion/AccordionItem';
import { Alert } from '../../../src/components/Alert/Alert';
import { Article } from '../../../src/components/Article/Article';
import { Badge } from '../../../src/components/Badge/Badge';
import { Breadcrumb } from '../../../src/components/Breadcrumb/Breadcrumb';
import { Button } from '../../../src/components/Button/Button';
import { Card } from '../../../src/components/Card/Card';
import { CardBody } from '../../../src/components/Card/CardBody';
import { CardFooter } from '../../../src/components/Card/CardFooter';
import { CardHeader } from '../../../src/components/Card/CardHeader';
import { CardTitle } from '../../../src/components/Card/CardTitle';
import { Code } from './code';
import { Link } from '../../../src/components/Link/Link';
import { Tab } from '../../../src/components/Tab/Tab';
import { TabContainer } from '../../../src/components/Tab/TabContainer';
import { TabContent } from '../../../src/components/Tab/TabContent';
import { Table } from '../../../src/components/Table/Table';

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