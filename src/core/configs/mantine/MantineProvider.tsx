import { Global, MantineProvider as _MantineProvider } from '@mantine/core';
import { PropsWithChildren } from 'react';
import {
  mantineDefaultProps,
  mantineGlobalStyles,
  mantineStyles,
  mantineTheme,
} from './props';

type Props = PropsWithChildren<{}>;

const MantineProvider: React.FC<Props> = ({ children }) => {
  return (
    <_MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={mantineTheme}
      styles={mantineStyles}
      defaultProps={mantineDefaultProps}
    >
      <Global styles={mantineGlobalStyles} />
      {children}
    </_MantineProvider>
  );
};

export default MantineProvider;
