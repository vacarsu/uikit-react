declare var UIkit: any;

interface BaseProps {
    className?: string;
    style?: object;
    align?: string;
    height?: string;
    width?: string;
    background?: string;
    position?: string;
}

interface AccordionProps extends BaseProps {
    children: any;
    options?: string;
}

interface AccordionItemProps {
    title: string;
    content: string;
}