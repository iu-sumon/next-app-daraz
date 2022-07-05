import React, { useState } from 'react';
 
import Link from 'next/link';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithEmailAndPassword, user, loading, signInError] = useSignInWithEmailAndPassword(auth);
    console.log(email, password);
    

    if (loading) {
        return <div className='flex justify-center items-center py-10'><button className="btn btn-square loading"></button></div>
    }

    if (signInError) {
        toast.error(signInError)
    }
    
if(user)
{
    console.log(user);
}

    const handleLogin = async (event) => {
        event.preventDefault()
        await signInWithEmailAndPassword(email, password)
        toast.success('Login successfully done.')
    }

    return (
        <>
            <Header></Header>
            <div className='bg-[#677E81] h-screen p-10'>
            <h1 className='text-3xl text-center text-white font-semibold p-5'>Please Login </h1>
                <div className="card flex-shrink-0 w-82 mx-auto max-w-sm shadow bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />

                                <label className="label">

                                    <p className="label-text-alt text-sm font-bold text-orange-500">New to Daraz?
                                        <Link href='/register'><a className='link link-hover'> Register</a></Link></p>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-lime-500">Login</button>
                            </div>
                        </form>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;