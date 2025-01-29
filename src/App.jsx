import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const defaultContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : defaultContacts;
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const searchContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  const addContact = async (values) => {
    const isCopy =
      values.name &&
      values.number &&
      contacts.some(
        (contact) =>
          contact.name.toLowerCase().trim() ===
            values.name.toLowerCase().trim() && contact.number === values.number
      );
    if (isCopy) {
      alert(`Контакт вже існує!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    setContacts((contacts) => [...contacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <SearchBox value={search} onSearch={setSearch} />
        <ContactList contacts={searchContacts} onDelete={handleDeleteContact} />
      </div>
    </>
  );
}

export default App;
