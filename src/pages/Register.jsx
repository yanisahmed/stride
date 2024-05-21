import React, { useState } from 'react';
export default function Register() {
    const [passMatch, setPassMatch] = useState(false);

    const handleSubmit = () => { }
    return (
        <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                name="password"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="confirm password"
                                className="input input-bordered"
                                name="confirm_password"
                                required
                            />
                        </div>
                        {!passMatch && (
                            <div className="my-2">
                                <p className="text-red-500">Passwords do not match!</p>
                            </div>
                        )}
                        <div className="form-control mt-6">
                            <input
                                className="btn bg-red-500 text-white"
                                type="submit"
                                value="Register"
                            />
                        </div>
                        <div className="mt-6">
                            {/* <GoogleLogin /> */}
                        </div>
                        <div className="mt-6">
                            {/* <p>
                                Already have an account?{" "}
                                <Link to="/login" className="text-red-500">
                                    Login
                                </Link>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
