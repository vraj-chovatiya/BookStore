import React, { useState } from 'react';
import './contact.css';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventdefault();
        console.log('Form Submitted!');

        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <div className='contact-container'>
                <h1>Contact</h1>
                <div className='contact-page'>
                    <div>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Message:
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className='right-panel'>
                        <p>For more information, please contact us at:</p>
                        <p>Phone: 123-456-7890</p>
                        <p>Email: vrajchovatiya11@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;