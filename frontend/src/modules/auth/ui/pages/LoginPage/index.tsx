import LoginForm from '@modules/auth/ui/components/LoginForm';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <section className={styles.loginPage}>
      <div className={styles.loginPageContent}>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
