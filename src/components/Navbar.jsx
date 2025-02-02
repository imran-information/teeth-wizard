import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthProviders } from './provider/AuthProvider';

const Navbar = () => {
    const { user, signOutUsr } = useContext(AuthProviders)
    const handleSignOut = () => {
        signOutUsr()
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allTreatments'> All Treatments</NavLink></li>
        <li><NavLink to='/myAppointment'>My Appointment</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-blue-950 px-10 top-0  fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">TEETH WIZARD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <NavLink to="/login" onClick={handleSignOut} className="btn">Sing Out</NavLink> : <NavLink to='/login' className="btn">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;