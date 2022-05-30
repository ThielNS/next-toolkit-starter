import axios from 'axios';
export { default as AxiosProvider } from './AxiosProvider';

export const SERVICE_BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({ baseURL: SERVICE_BASE_URL });

export default axiosInstance;
