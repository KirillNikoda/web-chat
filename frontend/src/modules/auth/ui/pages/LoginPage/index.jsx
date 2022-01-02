import './LoginPage.scss';

import LoginForm from 'modules/auth/ui/components/LoginForm';

const LoginPage = () => {
  return (
    <section className='auth'>
      <div className='auth__content'>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
