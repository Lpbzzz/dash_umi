import { Button, Checkbox, Form, Input, message } from 'antd';
// import { history } from '@umijs/max';
import * as Login from '@/services/login/Login';

const LoginForm = () => {
  const onFinish = async (values: any) => {
    console.log('Success:', values);
    // history.push('/dashboard');

    try {
      const res = await Login.LoginRequest(values);
      console.log(res);
    } catch (err) {
      message.error('登录失败');
    }
  };

  return (
    <Form
      style={{ width: '80%' }}
      name="login"
      layout="vertical"
      initialValues={{ remember: true }}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 24 }}
      onFinish={onFinish}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <div style={{ float: 'right' }}>
          <span
            style={{ fontWeight: 700, cursor: 'pointer', color: '#00000080' }}
          >
            忘记密码？
          </span>
        </div>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
