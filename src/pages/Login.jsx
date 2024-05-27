import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
export default function Login() {

    const { signIn, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const handleSUbmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password, from)

        try {
            await signIn(email, password);

        } catch (error) {
            console.log("Error signing in:", error);
        }
    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);
    return (
        <form onSubmit={handleSUbmit} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
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

                        <div className="form-control mt-6">
                            <input
                                className="btn bg-red-500 text-white"
                                type="submit"
                                value="Login"
                            />
                        </div>
                        <div className="mt-6">
                            {/* <GoogleLogin /> */}
                        </div>
                        <div className="mt-6">
                            {/* <p>
                                New here?{" "}
                                <Link to="/register" className="text-red-500">
                                    Register
                                </Link>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
