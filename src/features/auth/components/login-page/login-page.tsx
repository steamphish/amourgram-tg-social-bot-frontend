import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { ControlOutlined } from '@ant-design/icons';

interface LoginFormValues {
  username: string;
  password: string;
  remember: boolean;
}

const LoginPage: React.FC = () => {
  const onFinish = (values: LoginFormValues) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <ControlOutlined style={{ fontSize: '72px', marginBottom: '30px' }} />
      <Card style={{ width: '600px', fontSize: '18px', padding: '40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>AmourGram admin panel</h2>
        <Form
          name="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
            <Button style={{ marginLeft: '10px' }} type="default">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
