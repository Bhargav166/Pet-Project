import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase.js'
import logo from '../images/dog_logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const notify_register_success = () => {
        toast.success('Registered Successfully 🐶', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const notify_register_fail = (error) => {
        toast.error(error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const notify_login_success = () => {
        toast.success('Logged in Successfully 🐶', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const notify_login_fail = (error) => {
        toast.error(error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                history('/');
                notify_login_success();
            })
            .catch(e => notify_login_fail(e.message))

    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                notify_register_success();
            })
            .catch(e => notify_register_fail(e.message))
    }

    return (
        <div className='login_page'>
            <div className="image">
                <img src="https://spca.bc.ca/wp-content/uploads/family-outdoors-two-kids-two-dogs-825x551.jpg" alt="" />
            </div>
            <div className="login__container">
                <Link to='/'>
                    <img src={logo} alt="" className="login__logo" />
                </Link>

                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                    <ToastContainer
                        position="top-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="light"
                    />
                </form>
                <p>Not registered?</p>
                <button onClick={register} className="login__registerButton">Create your Account</button>
            </div>
        </div>

    );
}

export default Login