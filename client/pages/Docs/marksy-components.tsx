import * as React from 'react';
import * as Prism from 'prismjs';
import { escape } from 'he';
import marksy from 'marksy/components';
import { Accordion } from '../../components/Accordion/Accordion';
import { AccordionItem } from '../../components/Accordion/AccordionItem';
import { Alert } from '../../components/Alert/Alert';
import { Article } from '../../components/Article/Article';
import { Badge } from '../../components/Badge/Badge';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import { CardBody } from '../../components/Card/CardBody';
import { CardFooter } from '../../components/Card/CardFooter';
import { CardHeader } from '../../components/Card/CardHeader';
import { CardTitle } from '../../components/Card/CardTitle';
import { Code } from './code';
import { Link } from '../../components/Link/Link';
import { Tab } from '../../components/Tab/Tab';
import { TabContainer } from '../../components/Tab/TabContainer';
import { TabContent } from '../../components/Tab/TabContent';
import { Table } from '../../components/Table/Table';

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