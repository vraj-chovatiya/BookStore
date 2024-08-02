import React, { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            setPassword('');
            setConfirmPassword('');
            return;
        }
        // Add your registration logic here
        const user = { name, email, password };

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });

            if(response.ok){
                alert('User registered successfully');
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                navigate('/login');
            }else{
                alert('Registration failed');
            }

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='register'>
            <div className='auth-container'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Name</label>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Confirm Password</label>
                        <input
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className='registerbtn' type='submit'>Register</button>
                </form>
                <p className='already'>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
