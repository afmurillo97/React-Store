import { FcGoogle } from "react-icons/fc";
import Layout from '../../Components/Layout';
import './styles.css';

function SignIn() {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="form-container my-10">
        <div className="logo-container">
          Welcome Back!
        </div>

        <div className="social-buttons">
          <button className="social-button google">
            <FcGoogle />
            <span>Sign in with Google</span>

          </button>
          <button className="social-button apple">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6734 7.2221C10.7974 7.2221 9.44138 6.2261 8.01338 6.2621C6.12938 6.2861 4.40138 7.3541 3.42938 9.0461C1.47338 12.4421 2.92538 17.4581 4.83338 20.2181C5.76938 21.5621 6.87338 23.0741 8.33738 23.0261C9.74138 22.9661 10.2694 22.1141 11.9734 22.1141C13.6654 22.1141 14.1454 23.0261 15.6334 22.9901C17.1454 22.9661 18.1054 21.6221 19.0294 20.2661C20.0974 18.7061 20.5414 17.1941 20.5654 17.1101C20.5294 17.0981 17.6254 15.9821 17.5894 12.6221C17.5654 9.8141 19.8814 8.4701 19.9894 8.4101C18.6694 6.4781 16.6414 6.2621 15.9334 6.2141C14.0854 6.0701 12.5374 7.2221 11.6734 7.2221ZM14.7934 4.3901C15.5734 3.4541 16.0894 2.1461 15.9454 0.850098C14.8294 0.898098 13.4854 1.5941 12.6814 2.5301C11.9614 3.3581 11.3374 4.6901 11.5054 5.9621C12.7414 6.0581 14.0134 5.3261 14.7934 4.3901Z"></path>
            </svg>
            <span>Sign in with Apple</span>
          </button>
        </div>
        <div className="line"></div>
        <form 
          className="form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input required="" placeholder="Enter your email" name="email" id="email" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input required="" name="password" placeholder="Enter your password" id="password" type="password" />
          </div>

          <button type="submit" className="form-submit-btn">Sign In</button>
        </form>

        <a className="forgot-password-link link" href="#">Forgot Password</a>

        <p className="signup-link">
          Don&apos;t have an account?
          <a className="signup-link link" href="#"> Sign up now</a>
        </p>
      </div>
    </Layout>
  )
}

export default SignIn