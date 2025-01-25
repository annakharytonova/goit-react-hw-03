import Contact from "../Contact/Contact";
// import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <>
      <Contact contacts={contacts} />
    </>
  );
};

export default ContactList;
