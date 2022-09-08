import { useSelector} from 'react-redux';
import authSelectors from 'redux/auth-selectors';
// import authOperations from 'redux/auth-operations';
import defaultAvatar from './default-avatar.png';
import { Div } from './UserMenu.styled';
import {useNavigate} from 'react-router-dom'

export default function UserMenu() {
  const email = useSelector(authSelectors.getUserEmail);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutHandler = () => {
    navigate("/login", {replace: true})
    // dispatch(authOperations.logOut())

  }
  return (
      <Div>
          <img src={defaultAvatar} alt="" width="32" />
          <span>Ласкаво Просимо, {email} </span>
          <button type="button" onClick={logOutHandler}>
              Вихід
          </button>
      </Div>
  );
}
