
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import ContactForm from "./Components/ContactForm";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [contacts, setContacts] = useState([]);

  const toggleContactForm = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };


  const handleContactCreate = (newContact) => {
    setContacts([...contacts, newContact]);

    console.log("New Contact:", newContact);

    

  };




  return (
    <div className="main">
      <div className="All-contact-ui">
        <form>
          <button className="All-Contacts-btn" onClick={toggleContactForm}>
            All Contacts
            <span className="circle-plus-icon">
              <CiCirclePlus />{" "}
            </span>
          </button>
          <br />
          <input
            type="text"
            className="Search-input"
            placeholder="Search Contact"
          />
        </form>

        {isVisible && (
          <ContactForm
            setIsVisible={setIsVisible}
            onContactCreate={handleContactCreate}
          />
        )}


      </div>


      {contacts.map((contact, index) => (
        <div key={index}>
          <input type="text" value={contact.name} readOnly />

        </div>
      ))}
    </div>
  );
}

export default App;
