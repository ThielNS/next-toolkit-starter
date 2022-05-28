import { CSSObject, GlobalStyles } from '@mantine/core';

const mantineGlobalStyles: GlobalStyles = (theme) =>
  [
    {
      a: {
        color: theme.colors[theme.primaryColor],
      },
    },
  ] as CSSObject[];

export default mantineGlobalStyles;
