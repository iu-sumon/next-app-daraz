import React from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../public/firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth)
    console.log(user);

    const logout = () => {
        signOut(auth);
    };




    return (
        <div>
            <div className="navbar bg-lime-500 pl-5">
                <div className="navbar-start">
                    <a className="normal-case text-xl text-white font-bold">
                        <Link href='/'>Daraz</Link>

                    </a>
                </div>


                <div className='navbar-end mt-3'>

                    {user ? <button  onClick={logout} className=' btn bg-emerald-500 px-10 md:font-bold'>

                        <Link href='/login' passHref>SignOut</Link>

                    </button>
                        :
                        <button className=' btn bg-emerald-500 px-10 md:font-bold'>

                            <Link href='/login' passHref>Login</Link>

                        </button>



                    }
                </div>

            </div>
        </div>
    );
};

export default Header;