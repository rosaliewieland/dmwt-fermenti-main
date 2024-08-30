// components/LoginForm.js
"use client";
import {useState} from 'react';
import Welcome from '@/app/components/Welcome';
import loginForm from '@/app/styles/loginForm.css'

export default function LoginForm() {
    const [showWelcome, setShowWelcome] = useState(false);
    const [showSignUp, setShowSignUp] = useState(true);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        keyword: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        setShowWelcome(true);
        setShowSignUp(false);

        e.preventDefault();

        try {
            const response = await fetch('api/basicApi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('User created:', data);
                // Handle successful registration, e.g., show a success message or redirect
            } else {
                const errorData = await response.json();
                console.error('Error creating user:', errorData);
                // Handle error, e.g., show an error message
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <>
            {showSignUp && (
                <div className="login-container">
                    <div className="login-box">
                        <h2>Melde dich an!</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    placeholder={"Vorname"}
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder={"Nachname"}
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder={"Email"}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder={"Passwort"}
                                    type="password"
                                    id="keyword"
                                    name="keyword"
                                    value={formData.keyword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button className='login-button' type="submit">Anmelden</button>
                        </form>
                    </div>
                </div>
            )}
            {showWelcome && (
                <Welcome />

            )}
        </>

    );
}
