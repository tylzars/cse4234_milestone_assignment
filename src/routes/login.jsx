import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { GoogleButton } from 'react-google-button';

import Header from './components/header'
import Footer from './components/footer'


function Login() {
  const { handleSignIn, handleSignUp, googleSignIn, facebookSignIn, user } = UserAuth();
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await facebookSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserSignIn = async (e) => {
    try {
      await handleSignIn(e, signInEmail, signInPassword);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserSignUp = async (e) => {
    try {
      await handleSignUp(e, signUpEmail, signUpPassword);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
        {/* Store Start & Navbar */}
        <Header />

        <h2>Sign In With Username / Password</h2>
        <form onSubmit={handleUserSignIn}>
          <input
            type="email"
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Sign In</button>
        </form>

        <h2>Sign Up With Username / Password</h2>
        <form onSubmit={handleUserSignUp}>
          <input
            type="email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <div>
            <h2 className='text-center text-3xl font-bold py-8'>Sign In With Google</h2>
            <div className='max-w-[240px] m-auto py-4'>
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
        </div>
        <div>
            <h2 className='text-center text-3xl font-bold py-8'>Sign In With Facebook</h2>
            <div className='max-w-[240px] m-auto py-4'>
                <button onClick={handleFacebookSignIn}>Facebook Pop Up</button>
            </div>
        </div>
        <div>
            <h2> User Logged In: {user?.email == null ? "N/A" : user?.email}</h2>
        </div>
        <Footer />
    </>
  );
}

export default Login;