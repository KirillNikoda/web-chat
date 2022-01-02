import LoginForm from 'modules/LoginForm';

import './Auth.scss';

const Auth = () => {
  return (
    <section className='auth'>
      <div className='auth__content'>
        <LoginForm />
      </div>
    </section>
  );
};

export default Auth;
