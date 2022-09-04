import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import Container from 'components/Container';
import AppBar from 'components/AppBar';

import Loader from 'components/Loader';

import authOperations from '../../redux/auth-operations';
import authSelectors from 'redux/auth-selectors';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingUser);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const MainPage = lazy(() => import('Pages/MainPage/MainPage'));
  const ContactsContainer = lazy(() => import('Pages/Contacts/Contacts'));
  const Registration = lazy(() => import('Pages/Registration'));
  const Login = lazy(() => import('Pages/Login'));
  const NotFound = lazy(() => import('Pages/NotFound'));

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route
              path="/registration"
              element={
                <PublicRoute restricted>
                  <Registration />
                </PublicRoute>
              }
            ></Route>

            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsContainer />
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
    )
  );
}
