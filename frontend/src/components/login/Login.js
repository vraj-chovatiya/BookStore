import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const user = {email, password};

        try{
            const response = await fetch('http://localhost:4000/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });

            if(response.ok){
                const data = await response.json();
                console.log("Login successfully");
                localStorage.setItem('user', JSON.stringify(data.user)); // store user data in local storage
                alert('User logged in successfully');
                setEmail('');
                setPassword('');
                navigate('/');
            }

        }catch(err){
            console.log(`Error: ${err.message}`);
        }
    }

    return (
        <>
            <div className='login'>
                <div className='auth-container'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
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
                        <button className='loginbtn' type='submit'>Login</button>
                        <div className='not-account'>
                            <p>Don't have an account? <Link to='/register'>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Login;