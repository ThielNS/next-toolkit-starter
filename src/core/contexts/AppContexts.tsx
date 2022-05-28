import { PropsWithChildren } from 'react';
import MantineProvider from '../configs/mantine/MantineProvider';

type Props = PropsWithChildren<{}>;

const AppContexts: React.FC<Props> = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default AppContexts;
