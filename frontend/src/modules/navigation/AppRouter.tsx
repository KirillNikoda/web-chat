import LoginPage from '@modules/auth/ui/pages/LoginPage';
import RegisterPage from '@modules/auth/ui/pages/RegisterPage';
import HomePage from '@modules/home/page';
import AuthRequired from '@modules/navigation/guards/AuthRequired';
import NotAuthRequired from '@modules/navigation/guards/NotAuth';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <NotAuthRequired path='/login'>
          <LoginPage />
        </NotAuthRequired>
        <NotAuthRequired path='/register'>
          <RegisterPage />
        </NotAuthRequired>
        <AuthRequired exact path='/'>
          <HomePage />
        </AuthRequired>
      </Switch>
    </Router>
  );
};

export default AppRouter;
