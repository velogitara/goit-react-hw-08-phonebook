import {
  List,
  Number,
  ValueStyle,
  ButtonDelete,
  TitleStyle,
  RemovingLoader,
} from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/contacts';
import Loader from '../Loader';

const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact, result] = useDeleteContactMutation();
  const { isLoading: isDeleting } = result;
  return (
    <List>
      <span>
        <TitleStyle>Name:</TitleStyle>
        <ValueStyle> {name}</ValueStyle>
      </span>
      <Number>
        <TitleStyle>Number:</TitleStyle>
        <ValueStyle>{phone}</ValueStyle>
      </Number>
      <ButtonDelete
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? (
          <RemovingLoader>
            removing... <Loader size={'small'} />
          </RemovingLoader>
        ) : (
          <span>delete</span>
        )}
      </ButtonDelete>
    </List>
  );
};
export default ContactListItem;
