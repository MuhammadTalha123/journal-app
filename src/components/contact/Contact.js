import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <div className="contact_container">
            <h1>Contact</h1>
            <div className="email_contact">
                <h3>Email:   </h3>
                <p>ijafms@gmail.com</p>
            </div>
            <div className="address_contact">
            <h3>Address:   </h3>
                <p>79, Jalan Raja Alang, kampung<br/> baru, 50300 Kuala Lumpur, Malaysia</p>
            </div>
            <div className="phone_contact">
            <h3>Phone:   </h3>
            <p>+60149821764</p>
            </div>
        </div>
    );
};

export default Contact;