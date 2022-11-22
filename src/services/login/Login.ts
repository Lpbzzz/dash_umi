import { request } from '@umijs/max';

export const LoginRequest = async (params: {
  password: string;
  username: string;
}) => {
  return request('/api/v1/login', {
    method: 'GET',
    data: params,
  });
};
