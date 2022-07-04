import React from 'react';
import NextLink from 'next/link';
const Header = () => {
    const menuItems = <>

        
        <li className='font-semibold mr-3 text-white text-xl  p-3'><NextLink href='/' passHref>Cart</NextLink><sup>0</sup></li>
        <li className='font-semibold mr-5 text-white text-xl  p-3'><NextLink href='/login' passHref>Login</NextLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-secondary pl-5">
                <div className="navbar-start">
                    <a className="normal-case text-xl text-white font-bold">Daraz</a>
                </div>
               

                <div className='navbar-end '>
                    <div className="menu menu-horizontal p-0">
                        {menuItems}
                    </div>
                    <div className="dropdown dropdown-hover dropdown-end">

                        <label tabIndex="0">

                            <div className="avatar">

                                <div className=" text-center text-white text-xl bg-primary leading-tight z-10 rounded-full md:w-12 w-10  md:h-12 h-10 border-2 border-primary cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-primary">

                                    <img src="https://placeimg.com/192/192/people" />
                                </div>

                            </div>

                        </label>

                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg md:w-52 h-52">
                            <p className='text-center mb-5 md:font-bold'>Name</p>
                            <p className='text-center mb-5 md:font-bold'>Order History</p>
                            <p className='text-center mb-5 md:font-bold'>Logout</p>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;