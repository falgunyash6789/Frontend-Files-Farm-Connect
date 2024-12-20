import './login.css'
import { useEffect } from "react";
import PropTypes from 'prop-types'
import '@fortawesome/fontawesome-free/css/all.min.css';




export default function Login(props) {
  const { Handle } = props;
  useEffect(() => {
    const signInHandler = () => {
      container.classList.remove("sign-up-mode");
    };
    const signUpHandler = () => {
      container.classList.add("sign-up-mode");
    };

    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", signUpHandler);
    sign_in_btn.addEventListener("click", signInHandler);

    return () => {
      sign_up_btn.removeEventListener("click", signUpHandler);
      sign_in_btn.removeEventListener("click", signInHandler);
    };
  }, []);


  return (

    <div className="auth-page">

      <div className="container">

        <div className="forms-container">
          <div className="signin-signup">

            <form action="#" className="sign-in-form"

              onSubmit={(e) => {
                e.preventDefault();
                Handle();
              }}>
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>

              <input type="submit" value="Login" className="btn solid" onClick={Handle} />

              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="https://chat.whatsapp.com/H0TQTvaMh8N1mufwLswBSW" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://chat.whatsapp.com/H0TQTvaMh8N1mufwLswBSW" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://chat.whatsapp.com/H0TQTvaMh8N1mufwLswBSW" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="https://chat.whatsapp.com/H0TQTvaMh8N1mufwLswBSW" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>


            <form action="#" className="sign-up-form">
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign Up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="https://chat.whatsapp.com/H0TQTvaMh8N1mufwLswBSW" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://chat.whatsapp.com/H0TQTvaMh8N1mufwLswBSW" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://chat.whatsapp.com/H0TQTvaMh8N1mufwLswBSW" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="https://chat.whatsapp.com/H0TQTvaMh8N1mufwLswBSW" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Sign up to unlock more features like personalized farm insights, real-time weather updates, crop health monitoring, and market trend analysis. Access expert advice, new schemes, and join a community of farmers to grow your farm efficiently
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Sign Up
              </button>
            </div>
            <img src="assets/auth/log.svg" className="image" alt="Sign in illustration" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Sign in for personalized updates on your farm's progress, weather forecasts, crop health, and market trends. Access expert advice, new farming schemes, and community discussions. Stay informed with real-time insights tailored to your farm.
              </p>
              <br />
              <button className="btn transparent" id="sign-in-btn">
                Sign In
              </button>
            </div>
            <img src="assets/auth/register.svg" className="image" alt="Sign up illustration" />
          </div>
        </div>
      </div>
    </div>
  )
}
Login.propTypes = {
  Handle: PropTypes.func.isRequired,
};