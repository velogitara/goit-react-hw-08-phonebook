import { Nav, LinkHref } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <LinkHref to={'/'}>Головна</LinkHref>
      <LinkHref to={'/contacts'}>Контакти</LinkHref>
    </Nav>
  );
}
