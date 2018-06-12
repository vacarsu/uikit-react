export function sizeClass(size: string): string {
  switch(size) {
      case 'default':
          return 'default';
      case 'small':
          return 'small';
      case 'large':
          return 'large';
      case 'expand':
          return 'expand';
      default:
          return 'default';
          
          
  }
}