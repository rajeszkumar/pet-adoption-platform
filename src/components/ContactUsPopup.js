import React, { useState } from "react";
import "./ContactUsPopup.css";
import contactImage from "../images/contact.jpg"; // Import the image

function ContactUsPopup({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for contacting us, ${formData.name}!`);
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <div className="popup-left">
                    <img src={contactImage} alt="Contact Us" />
                </div>
                <div className="popup-right">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <textarea
                                id="address"
                                name="address"
                                placeholder="Enter your address"
                                onChange={handleChange}
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                        <button type="button" className="close-button" onClick={onClose}>
                            Close
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPopup;
