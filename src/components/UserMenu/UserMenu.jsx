import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'redux/auth-selectors';
import authOperations from 'redux/auth-operations';
import defaultAvatar from './default-avatar.png';
import { Div } from './UserMenu.styled';

export default function UserMenu() {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  return (
    <Div>
      <img src={defaultAvatar} alt="" width="32" />
      <span>Ласкаво Просимо, {email} </span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Вихід
      </button>
    </Div>
  );
}
