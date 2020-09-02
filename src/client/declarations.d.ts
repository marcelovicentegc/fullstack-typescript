interface Style {
  [key: string]: string;
}

declare module "*.scss" {
  const style: Style;
  export = style;
}
