export function inverseClass(inverse: string): string {
  switch(inverse) {
      case 'light':
          return 'light';
      case 'dark':
          return 'dark';
      default:
          return 'default';
          
  }
}