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
      console.log('request', request);
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
  async (response: AxiosResponse) => {
    console.log('response', response);
    if (response.status === 401) {
      try {
        const {
          data: {accessToken, refreshToken},
          status,
        } = await useApi.post('/auth/refresh');
        if (status === 201) {
          await AsyncStorage.setItem('access_token', accessToken);
          await AsyncStorage.setItem('refresh_token', refreshToken);
          return useApi(response.config);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  e => {
    return Promise.reject(e);
  },
);

export default useApi;
