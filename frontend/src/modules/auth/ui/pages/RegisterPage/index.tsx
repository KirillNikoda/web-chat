import RegisterForm from '@modules/auth/ui/components/RegisterForm';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  return (
    <section className={styles.registerPage}>
      <div className={styles.registerPageContent}>
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
