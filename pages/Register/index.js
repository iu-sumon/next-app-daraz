import React from 'react';
import Link from 'next/link';


function Register() {

    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" />
                    </div>
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

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />

                        <label className="label">

                            <p className="label-text-alt">All ready have an account?
                                <Link href='/login'><a className='link link-hover'>Login</a></Link></p>
                        </label>

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;