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
    Container,
    Label,
    Link,
    List,
    ListItem,
    Grid,
    Icon,
    Image,
    Lightbox,
    Margin,
    Tab,
    TabContainer,
    TabContent,
    Table,
    Cover,
    Dark,
    Light,
    Section,
    Flex,
    Dropdown,
    Nav,
    NavItem,
    NavbarContainer,
    Navbar,
    NavbarDropdown,
    NavbarSticky
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
        Container,
        Grid,
        Link,
        List,
        ListItem,
        Icon,
        Lightbox,
        Image,
        Label,
        Margin,
        Tab,
        TabContainer,
        TabContent,
        Cover,
        Dark,
        Light,
        Section,
        Flex,
        Dropdown,
        Nav,
        NavItem,
        NavbarContainer,
        Navbar,
        NavbarDropdown,
        NavbarSticky
    }
});