import { useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth-slice';

export default function UserMenu() {
  const name = useSelector(getUserName);
  return (
    <div>
      <span>Ласкаво Просимо, {name} </span>
      <button type="button">Вихід</button>
    </div>
  );
}
