import s from "./Contact.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ contacts }) => {
  return (
    <div className={s.container}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <div className={s.itemInfo}>
            <h2 className={s.name}>
              <span className={s.icon}>
                <FaUserLarge />
              </span>
              {"  "}
              {name}
            </h2>
            <p className={s.number}>
              <span className={s.icon}>
                <FaPhone />
              </span>
              {"  "}
              {number}
            </p>
          </div>

          <div className={s.itemButton}>
            <button className={s.button}>Delete</button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Contact;
