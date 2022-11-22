// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
import { CodepenOutlined } from '@ant-design/icons';

import type { RequestConfig } from '@umijs/max';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'dontHaveAccess' };
}

export const layout = () => {
  return {
    logo: <CodepenOutlined />,
  };
};

export const request: RequestConfig = {
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  requestInterceptors: [
    (url, options) => {
      const { headers } = options;
      return {
        url,
        options: {
          ...options,
          headers: {
            ...headers,
            'X-Auth-Token': `Bearer ${localStorage.getItem('token')}`,
          },
        },
      };
    },
  ],
};
