import { Block } from 'components';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useEffect, useState } from 'react';

import './Auth.scss';

const Auth = () => {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
    <section className='auth'>
      <div className='auth__content'>
        <div className='auth__top'>
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              hasFeedback
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите имя пользователя!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Username'
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите пароль!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Password'
              />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='button login-form-button'
                size='large'
              >
                Войти в аккаунт
              </Button>
            </Form.Item>
            <a href='#' className='auth__register-link'>
              Зарегистрироваться
            </a>
          </Form>
        </Block>
      </div>
    </section>
  );
};

export default Auth;
