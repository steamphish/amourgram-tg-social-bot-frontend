import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { ControlOutlined } from '@ant-design/icons';
import './login-page.scss';

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
    <div className="login-page">
      <ControlOutlined className="control-icon" />
      <Card className="login-form">
        <h2 className="form-title">AmourGram admin panel</h2>
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
            <Button className="signup-button" type="default">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
