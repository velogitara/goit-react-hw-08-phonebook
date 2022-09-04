import { Form, P, RegButton } from './Login.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth-operations';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // const { data: baseList } = useFetchUsersQuery();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = { email, password };
    formSubmitHandler(formData);
  };
  const formSubmitHandler = data => {
    // baseList.find(i => i.name.toLowerCase() === data.name.toLowerCase())
    //   ? Notiflix.Notify.failure('That name already in the list', {
    //       position: 'center-center',
    //     })
    // :
    dispatch(authOperations.login({ email, password }));
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);

        break;

      case 'password':
        setPassword(value);

        break;
      default:
        break;
    }
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <P>Почта</P>
        <input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="please enter valid email address"
          required
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        <P>Password</P>
        <input
          type="password"
          name="password"
          inputMode="number"
          minLength="6"
          maxLength="12"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,12}$"
          title="(At least one lowercase letter(a - z).At least one uppercase letter(A - Z).At least one numeric value(0-9).At least one special symbol(!@#$%^&*=+-_).The total length should be greater than or equal to 6 and less or equal to 12."
          required
          value={password}
          onChange={handleChange}
        />
      </label>
      <RegButton type="submit">Registration</RegButton>
    </Form>
  );
};

export default Login;
