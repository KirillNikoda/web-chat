import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AuthRequired from './guards/AuthRequired';
import HomePage from 'modules/home/page';
import NotAuthRequired from './guards/NotAuth';
import LoginPage from 'modules/auth/ui/pages/LoginPage';
import RegisterPage from 'modules/auth/ui/pages/RegisterPage';

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
