import { PropsWithChildren } from 'react';
import { QueryClientProvider } from 'react-query';
import axiosInstance, { AxiosProvider } from './axios';
import MantineProvider from './mantine/MantineProvider';
import { queryClient } from './reactQuery';

type Props = PropsWithChildren<{}>;

const AppConfigs: React.FC<Props> = ({ children }) => {
  return (
    <AxiosProvider axiosInstance={axiosInstance}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>{children}</MantineProvider>
      </QueryClientProvider>
    </AxiosProvider>
  );
};

export default AppConfigs;
