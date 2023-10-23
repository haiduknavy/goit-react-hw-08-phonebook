import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import { FormWrapper, Label, Button } from './ContactForm.styled';

export default function ContactForm() {
  const [userName, setName] = useState('');
  const [userNumber, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'userName':
        setName(value);
        break;

      case 'userNumber':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmitt = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === userName)) {
      alert(`${userName} is already in contacts`);
      reset();
      return;
    }
    const newContacts = {
      name: userName,
      phone: userNumber,
    };

    dispatch(addContact(newContacts));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrapper onSubmit={handleSubmitt}>
      <Label>
        Name
        <input
          type="text"
          name="userName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={userName}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <input
          type="tel"
          name="userNumber"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={userNumber}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormWrapper>
  );
}
