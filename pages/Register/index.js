import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    console.log(name, email, password, confirmPassword);
    const [createUserWithEmailAndPassword, loading] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        toast.error(error)
    }
    if (loading) {
        return <div className='flex justify-center items-center py-10'><button className="btn btn-square loading"></button></div>
    }

    const handleRegister = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Password did not match!')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 character or longer.')
            return;
        }
        await createUserWithEmailAndPassword(email, password)
        toast.success('Registered Successfully!')
    }


    return (
        <>
            <Header></Header>
            <div className='my-10'>
                <div className="card flex-shrink-0 w-82 mx-auto max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input onBlur={(e) => setName(e.target.value)} type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input onBlur={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" />

                                <label className="label">

                                    <p className="label-text-alt">All ready have an account?
                                        <Link href='/login'><a className='link link-hover'>Login</a></Link></p>
                                </label>

                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;