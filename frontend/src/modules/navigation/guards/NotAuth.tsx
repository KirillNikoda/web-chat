import { isAuthenticated } from '@/modules/auth/store/selectors';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const NotAuthRequired: React.FC<any> = ({ children, ...restProps }) => {
  const authenticated = useSelector(isAuthenticated);

  return !authenticated ? (
    <Route {...restProps} render={() => children} />
  ) : (
    <Redirect to={{ pathname: '/' }} />
  );
};

export default NotAuthRequired;
