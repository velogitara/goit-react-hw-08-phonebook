// import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  ContactForm,
  Label,
  ButtonAdd,
  Input,
  AddingLoader,
} from './Form.styled';
// import { nanoid } from 'nanoid';
import { useFetchContactsQuery, useAddContactMutation } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { addName, addNumber, getName, getNumber } from '../../redux/contacts';

import Loader from 'components/Loader';

import Notiflix from 'notiflix';

function Form() {
  const { data: baseList } = useFetchContactsQuery();
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();
  const dispatch = useDispatch();
  const nameValue = useSelector(getName);
  const numberValue = useSelector(getNumber);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // const reset = () => {
  //   setName('');
  //   setPhone('');
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const objWithId = { phone, name };
    formSubmitHandler(objWithId);
    console.log(
      addContact().then(res => {
        console.log(res);
        return res;
      })
    );
  };

  const formSubmitHandler = data => {
    baseList.find(i => i.name.toLowerCase() === data.name.toLowerCase())
      ? Notiflix.Notify.failure('That name already in the list', {
          position: 'center-center',
        })
      : addContact(data) && dispatch(addName('')) && dispatch(addNumber(''));
  };
  const handleInput = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        dispatch(addName(value));
        break;

      case 'number':
        setPhone(value);
        dispatch(addNumber(value));
        break;
      default:
        break;
    }
  };

  return (
    <ContactForm autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        <span>Name</span>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={nameValue}
          onChange={handleInput}
        />
      </Label>
      <Label>
        <span>Phone</span>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={numberValue}
          onChange={handleInput}
        />
      </Label>
      <ButtonAdd type="submit" disabled={isAdding}>
        {isAdding ? (
          <AddingLoader>
            Adding..... <Loader size={'small'} />
          </AddingLoader>
        ) : (
          <span>Add contact</span>
        )}
      </ButtonAdd>
    </ContactForm>
  );
}

export default Form;
