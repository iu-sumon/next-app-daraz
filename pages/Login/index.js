import React from 'react';
import Link from 'next/link';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Login = () => {
    return (
        <>
        <Header></Header>
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />

                        <label className="label">

                        <p className="label-text-alt">New to Daraz?
                                <Link href='/register'><a className='link link-hover'>Register</a></Link></p>

                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
    );
};

export default Login;