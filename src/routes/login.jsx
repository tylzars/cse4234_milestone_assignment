import { UserAuth } from '../context/AuthContext';
import { GoogleButton } from 'react-google-button';


import NavBar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'


function Login() {
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <Header />
        <NavBar />
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