import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthProviders } from './provider/AuthProvider';

const SignUp = () => {
    const { signUpUser } = useContext(AuthProviders)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signUpUser(email, password);

    }
    return (
        <div className='flex flex-col justify-center items-center mt-96'>
            <div className="card bg-base-100 w-full  max-w-2xl shrink-0 shadow-2xl">
                <h3 className='text-4xl text-center font-extrabold '>Sign Up now!!</h3>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SignUP</button>
                    </div>
                </form>

                <p className='text-center'>Already Haven Account ? <NavLink to='/login' className='text-teal-400 '>Login</NavLink></p>

            </div>
        </div>
    );
};

export default SignUp;