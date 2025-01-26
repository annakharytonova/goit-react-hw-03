import s from "./Contact.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <div className={s.container}>
      <div className={s.itemInfo}>
        <h2 className={s.name}>
          <span className={s.icon}>
            <FaUserLarge />
          </span>
          {"  "}
          {contact.name}
        </h2>
        <p className={s.number}>
          <span className={s.icon}>
            <FaPhone />
          </span>
          {"  "}
          {contact.number}
        </p>
      </div>

      <div className={s.itemButton}>
        <button className={s.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
