import { Input } from 'antd';
import { Block, Button } from 'components';

import './Auth.scss';

const Auth = () => {
  return (
    <section className='auth'>
      <div className='auth__content'>
        <div className='auth__top'>
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Input placeholder='qwe' />
          <Button size='large' type='primary'>
            chat
          </Button>
        </Block>
      </div>
    </section>
  );
};

export default Auth;
