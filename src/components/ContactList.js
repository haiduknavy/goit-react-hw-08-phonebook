import React, { useEffect } from "react";
import style from "./contacts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getThunkData, deleteThunkData } from "../redux/contacts/operations";
import { getFilteredContacts } from "../redux/contacts/selectors";

import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'

export default function ContactList() {
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(getThunkData());
  }, [dispatch]);
  const onDelete = (id) => {
    dispatch(deleteThunkData(id));
    dispatch(getThunkData());
     new Notify({
            status: 'warning',
            text: `Contact has been deleted`,
            effect: 'slide',
            type: 3,
            autoclose: 2000,
          })
  }
  return (
    <ul className={style.list}>
      {filterContacts.map(({ id, name, number }) => (
        <li className={style.listItem} key={id}>
          <p>{name}: {number}</p>
          <button
            type="button"
            className={style.btnDelete}
            id={id}
            onClick={()=>onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
