export function colorClass(color: string): string {
    switch(color) {
        case 'default':
            return 'default';
        case 'primary':
            return 'primary';
        case 'secondary':
            return 'secondary';
        case 'danger':
            return 'danger';
        case 'success':
            return 'success';
        case 'warning':
            return 'warning';
        case 'text':
            return 'text';
        case 'link':
            return 'link';
        default:
            return 'default';
            
    }
}