import { Form, P, RegButton } from './Registration.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth-operations';
// import { useCreateUserMutation } from 'redux/auth-createApi';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // const [createUser] = useCreateUserMutation();

  // const { data: baseList } = useFetchUsersQuery();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = { name, email, password };
    formSubmitHandler(formData);
  };
  const formSubmitHandler = ({ name, email, password }) => {
    // baseList.find(i => i.name.toLowerCase() === data.name.toLowerCase())
    //   ? Notiflix.Notify.failure('That name already in the list', {
    //       position: 'center-center',
    //     })
    // :

    dispatch(authOperations.register({ name, email, password }));
    // createUser(data);
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);

        break;

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
    <Form onSubmit={handleSubmit}>
      <label>
        <P>Name</P>
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
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
          minLength="7"
          maxLength="12"
          // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{7,12}$"
          // title="(At least one lowercase letter(a - z).At least one uppercase letter(A - Z).At least one numeric value(0-9).At least one special symbol(!@#$%^&*=+-_).The total length should be greater than or equal to 6 and less or equal to 12."
          required
          value={password}
          onChange={handleChange}
        />
      </label>
      <RegButton type="submit">Registration</RegButton>
    </Form>
  );
};

export default Registration;
