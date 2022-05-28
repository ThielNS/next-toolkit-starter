import { CSSObject, MantineTheme } from '@mantine/core';

declare module '@mantine/core' {
  type ProviderStyles = Record<
    string,
    | Record<string, CSSObject>
    | ((theme: MantineTheme, params: any) => Record<string, CSSObject>)
  >;

  type MantineDefaultProps = Record<string, Record<string, any>>;

  type GlobalStyles = (theme: MantineTheme) => any;
}
