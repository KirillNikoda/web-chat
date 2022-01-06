import { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Block } from '@modules/ud-ui';
import styles from './RegisterPage.module.scss';
import Notification from '@modules/ud-ui/Notification';

const RegisterForm = () => {
  const [successfullyRegistered, setSuccessfullyRegistered] = useState(false);

  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
    setSuccessfullyRegistered(true);
  };

  return (
    <>
      <div className={styles.loginFormTop}>
        <h2>Регистрация</h2>
        <p>Для входа в чат, нужно зарегистрироваться</p>
      </div>
      {successfullyRegistered ? (
        <Notification
          title='Подтвердите свой аккаунт'
          description='На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта'
        />
      ) : (
        <Block className={styles.loginForm}>
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
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите ваш e-mail!',
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className='site-form-item-icon' />}
                placeholder='E-mail'
              />
            </Form.Item>
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
                placeholder='Имя пользователя'
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
                placeholder='Пароль'
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              name='repeat-password'
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, повторите пароль!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Повторите пароль'
              />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className={styles.loginFormButton}
                size='large'
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link to='/login' className={styles.registerLink}>
              Войти в аккаунт
            </Link>
          </Form>
        </Block>
      )}
    </>
  );
};

export default RegisterForm;
