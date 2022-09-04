import { useFetchContactsQuery } from 'redux/contacts';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts';
import Filter from '../Filter';
import Loader from '../Loader';
import ContactListItem from '../ContactListItem';

import { Ul, TitleStyle } from './ContactsList.styled';

export const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();

  const filterValue = useSelector(getFilter);
  let newData = [];

  if (data) {
    newData = data;
  }

  const filteredContacts = newData.filter(i =>
    i.name.toLowerCase().includes(filterValue)
  );

  return (
    <>
      <h2>Contacts</h2>
      {newData.length ? (
        <Filter title={'Find contacts by name'} />
      ) : (
        <div></div>
      )}
      {isFetching && <Loader size={'large'} />}

      <Ul>
        {filteredContacts.length ? (
          filteredContacts.map(item => {
            return <ContactListItem key={item.id} {...item} />;
          })
        ) : (
          <div>
            {filterValue ? (
              <span>
                No contacts <TitleStyle>found</TitleStyle>
              </span>
            ) : (
              <span>
                No contacts <TitleStyle>yet</TitleStyle>
              </span>
            )}
          </div>
        )}
      </Ul>
    </>
  );
};
