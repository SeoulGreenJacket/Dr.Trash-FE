import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ACCESS_TOKEN = AsyncStorage.getItem('access_token');
const REFRESH_TOKEN = AsyncStorage.getItem('refresh_token');

const useApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

useApi.interceptors.response.use(
  res => res,
  async error => {
    const {config, response} = error;
    if (response.status === 401) {
      const {
        data: {accessToken, refreshToken},
        status,
      } = await axios.post('http://localhost:3000/auth/refresh', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${REFRESH_TOKEN}`,
        },
      });
      if (status === 201) {
        await AsyncStorage.setItem('access_token', accessToken);
        await AsyncStorage.setItem('refresh_token', refreshToken);
        return useApi(config);
      } else {
        await AsyncStorage.clear();
      }
    }
  },
);

export default useApi;
