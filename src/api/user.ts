import axios from '@/utils/axios';
import type { AxiosPromise } from 'axios';

type Login = {
  username: string;
  password: string;
};

/**
 * @description 登录
 * @param { String } username - 用户名
 * @param { String } password - 密码
 */
export const login = ({ username, password }: Login): AxiosPromise => {
  const params = { username, password };

  return axios.request({
    url: '/api',
    method: 'get',
    params
  });
};

/**
 * @description 注册
 */
export const register = (): AxiosPromise => {
  const data = {};

  return axios.request({
    url: '/api',
    method: 'post',
    data
  });
};
