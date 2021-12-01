import './Login.css';
import { auth } from './firebase';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import header_logo from './images/header_logo.png';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // Firebase Login
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message));
    };

    const register = e => {
        e.preventDefault();

        // Firebase register
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src={ header_logo }
                    alt="Login Logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail: </h5>
                    <input
                        type="text"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={ e => setPassword(e.target.value)}
                    />

                    <button
                        className='login__signInButton'
                        type='submit'
                        onClick={signIn}>
                        Sign In
                    </button>
                    <p>Make sure to read the terms and conditions</p>
                </form>
                <button
                    className='login__registerButton'
                    onClick={register}>
                    Create Account
                </button>
            </div>
        </div>
    );
}

export default Login;
