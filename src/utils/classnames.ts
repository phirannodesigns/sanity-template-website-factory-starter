// eslint-disable-next-line @typescript-eslint/no-explicit-any
function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(' ');
}

export { classNames };
