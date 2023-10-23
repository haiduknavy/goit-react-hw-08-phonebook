import { ContactList, ListItem, DelBtn } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations';

import { useEffect } from 'react';
import { getFilterContacts } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactList>
      {contacts.map(({ name, id, phone }) => {
        return (
          <ListItem key={id}>
            {name}: {phone}
            <DelBtn type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </DelBtn>
          </ListItem>
        );
      })}
    </ContactList>
  );
};

export default Contacts;
