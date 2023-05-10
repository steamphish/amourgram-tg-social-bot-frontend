import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { ControlOutlined } from '@ant-design/icons';
import './login-page.scss';
import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import { SignInFormValues } from '../../api/models/auth.model';
import { toast } from 'react-toastify';

const LoginPage: React.FC = () => {
  const { signIn } = useAuth();

  const navigate = useNavigate();

  const onFinish = async (values: SignInFormValues) => {
    try {
      await signIn(values);
      navigate('/');
    } catch (e) {
      toast.error("Something wen't wrong. Please, try again later");
    }
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
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input your e-mail!',
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

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
