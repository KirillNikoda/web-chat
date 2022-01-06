import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Block } from '@modules/ud-ui';
import styles from './LoginForm.module.scss';
import classNames from 'classnames';

const LoginForm = () => {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <>
      <div className={styles.loginFormTop}>
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
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
