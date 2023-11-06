import React, { useEffect, useState } from 'react';
import './styles.less'; 

const Login: React.FC = () => {
    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        const handleRegisterClick = () => {
            container?.classList.add("active");
        };

        const handleLoginClick = () => {
            container?.classList.remove("active");
        };

        registerBtn?.addEventListener('click', handleRegisterClick);
        loginBtn?.addEventListener('click', handleLoginClick);

        return () => {
            registerBtn?.removeEventListener('click', handleRegisterClick);
            loginBtn?.removeEventListener('click', handleLoginClick);
        };
    }, []);
    useEffect(() => {
        // Create a link element
        const link = document.createElement('link');
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
        link.rel = 'stylesheet';
    
        // Append the link element to the document head
        document.head.appendChild(link);
    
        return () => {
          // Clean up: remove the link when the component unmounts
          document.head.removeChild(link);
        };
      }, []);
    
    return (
        <div className="container" id="container">
            <div className="form-container sign-up">
                <form>
                    <h1 style={{color: 'black'}}>Create Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1 style={{color: 'black'}}>Sign In</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forget Your Password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1 >Welcome Back!</h1>
                        <p>Enter your personal details to use all site features</p>
                        <button className="hidden" id="login">Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all site features</p>
                        <button className="hidden" id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;
