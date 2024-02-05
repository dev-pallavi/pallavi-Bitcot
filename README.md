

App.jsx is a React component designed as the main entry point for a contact management application.
It leverages React state and components to create a user-friendly interface for managing contacts.
The application allows users to toggle the visibility of a contact form, add new contacts, and view a list of existing contacts.

Dependencies:
React: A popular JavaScript library for building user interfaces.
react-icons: A library that provides a collection of icons for React components.
Component Structure:
1. App Component:
State:

isVisible: Manages the visibility of the contact form.
contacts: An array holding contact information.
Methods:

toggleContactForm: Toggles the visibility of the contact form.
handleContactCreate: Handles the creation of a new contact and updates the contacts array.
Render:

Displays a button to toggle the contact form.
Renders the contact form if isVisible is true.
Displays a list of contacts.
ContactForm Component:
The ContactForm component is designed to facilitate the addition and editing of contacts.

Props:
setIsVisible: A function to control the visibility of the contact form.
onContactCreate: A function to handle the creation of a new contact.
State:
contacts: An array to store contact data.
formData: An object to store form input data.
selectedContact: Holds the index of the contact being edited (null if adding a new contact).
errors: An object to store form validation errors.
Methods:
handleChange: Handles input changes and updates the form data.
validateForm: Validates form input and updates the errors state.
handleCreate: Handles contact creation, resets the form, and updates the visibility.
handleReset: Resets the form and clears errors.
Render:
Renders a form with input fields for name, email, phone, and address.
Displays validation error messages.
Provides buttons for submitting, resetting, and closing the form.
Lists existing contacts with edit and delete options.
App.css:
The CSS file contains styling rules for App.jsx and ContactForm.jsx, providing a visually appealing and responsive user interface.

Responsive Design:
Media queries are utilized for responsiveness.
Adjustments are made for smaller screens, optimizing layout and button sizes.
