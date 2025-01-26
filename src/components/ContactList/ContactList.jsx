import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={s.containerList}>
      {contacts.map((contact, id) => (
        <li key={id} className={s.itemList}>
          <Contact key={id} contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </div>
  );
};

export default ContactList;
