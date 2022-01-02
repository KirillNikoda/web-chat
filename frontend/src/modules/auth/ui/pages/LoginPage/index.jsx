import './LoginPage.scss';

import LoginForm from 'modules/auth/ui/components/LoginForm';

const LoginPage = () => {
  return (
    <section className='login-page'>
      <div className='login-page__content'>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
