import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from 'components/UserMenu';
import { Header } from './AppBar.styled';
import authSelectors from 'redux/auth-selectors';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
