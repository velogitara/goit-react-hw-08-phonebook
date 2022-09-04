import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth-selectors';
import { Notify } from 'notiflix';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (!isLoggedIn) {
    Notify.failure('Please login first', {
      position: 'center-center',
    });
  }
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
