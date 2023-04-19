import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { GoogleButton } from 'react-google-button';

import NavBar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'


function Login() {
  const { handleSignIn, handleSignUp, googleSignIn, user } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserSignIn = async (e) => {
    try {
      await handleSignIn(e, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserSignUp = async (e) => {
    try {
      await handleSignUp(e, email, password);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
        <Header />
        <NavBar />


        <form onSubmit={handleUserSignIn}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Sign In</button>
        </form>

        <form onSubmit={handleUserSignUp}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <div>
            <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
            <div className='max-w-[240px] m-auto py-4'>
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
        </div>
        <div>
            <h4> User Logged In: </h4>
            {user?.email}
        </div>
        <Footer />
    </>
  );
}

export default Login;