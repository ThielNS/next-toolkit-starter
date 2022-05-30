import { PropsWithChildren } from 'react';
import axiosInstance, { AxiosProvider } from './axios';
import MantineProvider from './mantine/MantineProvider';

type Props = PropsWithChildren<{}>;

const AppConfigs: React.FC<Props> = ({ children }) => {
  return (
    <AxiosProvider axiosInstance={axiosInstance}>
      <MantineProvider>{children}</MantineProvider>
    </AxiosProvider>
  );
};

export default AppConfigs;
