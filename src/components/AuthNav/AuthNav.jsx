import { Nav, LinkHref } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Nav>
      <LinkHref to={'/registration'}>Реестрація</LinkHref>
      <LinkHref to={'/login'}>Логін</LinkHref>
    </Nav>
  );
}
