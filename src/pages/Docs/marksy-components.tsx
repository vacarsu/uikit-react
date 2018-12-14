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
    Link,
    List,
    ListItem,
    Grid,
    Icon,
    Image,
    Lightbox,
    Label,
<<<<<<< HEAD
=======
    Margin,
    Labels,
    Nav,
>>>>>>> 39bb150918e1f51a2572c6ccb779533d2e13b942
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
<<<<<<< HEAD
=======
        Margin,
        Labels,
        Nav,
>>>>>>> 39bb150918e1f51a2572c6ccb779533d2e13b942
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