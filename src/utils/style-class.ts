export function styleClass(style: string): string {
  switch(style) {
      case 'default':
          return 'default';
      case 'primary':
          return 'primary';
      case 'muted':
          return 'muted';
      case 'secondary':
          return 'secondary';
      default:
          return 'default';
          
  }
}