import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "../App.css";

const ContactForm = ({ setIsVisible }) => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [selectedContact, setSelectedContact] = useState(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Validate Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Invalid phone number (10 digits)";
      isValid = false;
    }

    // Validate Address
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleCreate = () => {
    if (validateForm()) {
      setContacts({...contacts, formData});
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
      setIsVisible(false);
      
      
      // Close the form after submission

      // Console.log the data
      console.log("New Contact:", formData);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    setSelectedContact(null);
    setErrors({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleCreate}>
        <div className="Add-Contact-form">
          <div className="text-heading">
            <h2>{selectedContact !== null ? "Edit Contact" : "Add Contact"}</h2>
          </div>

          <div className="cross-icon-button">
            <RxCross1
              className="cross-icon-RxCross1"
              onClick={() => setIsVisible(false)}
            />
          </div>
        </div>

        <div className="horizontal-line">
          <hr></hr>
        </div>
        <br></br>

        <label>
          Name:<br></br>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </label>

        <label>
          Email: <br></br>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </label>

        <label>
          Phone: <br></br>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter Your Address"
          />
          {errors.address && (
            <span className="error-message">{errors.address}</span>
          )}
        </label>

        <div className="button-group">
          <button type="submit" className="submit-button">
            {selectedContact !== null ? "Update" : "Submit"}
          </button>

          <button type="button" className="Reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      <div className="contact-list">
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <span>{contact.name}</span>
              <button type="button" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button type="button" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
