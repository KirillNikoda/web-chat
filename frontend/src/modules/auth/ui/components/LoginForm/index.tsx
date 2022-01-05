import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Block } from '@modules/ud-ui';
import styles from './LoginForm.module.scss';
import classNames from 'classnames';

const LoginForm = () => {
  const [, forceUpdate] = useState({});

  console.log(styles.test);

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };
  return (
    <>
      <div className={styles['login-page__top']}>
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block className={styles.loginFormBlock}>
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
              className={classNames(styles.loginFormButton)}
              size='large'
            >
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link to='/register' className={styles.registerLink}>
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </>
  );
};

export default LoginForm;
