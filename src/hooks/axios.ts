import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';
import Config from 'react-native-config';

const useApi = axios.create({
  baseURL: Config.SERVER_HOST,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

useApi.interceptors.request.use(
  async (request: AxiosRequestConfig<AxiosRequestHeaders>) => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      request.headers!.Authorization = `Bearer ${access_token}`;
      // console.log('request', request);
      return request;
    } catch (error) {
      return console.log(error);
    }
  },
  e => {
    return Promise.reject(e);
  },
);

useApi.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.log('response', response);
    return response;
  },
  async e => {
    const {
      response: {status},
      config,
    } = e;
    // console.log('status', status);
    // console.log('config', config);
    if (status === 401) {
      try {
        const {
          data: {accessToken, refreshToken},
          status: secondStatus,
        } = await useApi.post('/auth/refresh');
        if (secondStatus === 201) {
          await AsyncStorage.setItem('access_token', accessToken);
          await AsyncStorage.setItem('refresh_token', refreshToken);
          return useApi(config);
        }
      } catch (error) {
        console.log(error);
      }
    }
    return Promise.reject(e);
  },
);

export default useApi;
