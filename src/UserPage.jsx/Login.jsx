import React from "react";
import { Link } from "react-router";
import { AuthContext } from "../Firebase/AuthContext";
import { use } from "react";
import { useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";



const Login = () => {
  const { signIn,goggle } = use(AuthContext);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then(
        (result) => console.log(result),

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log In Successful",
          showConfirmButton: false,
          timer: 1500,
        }),

        navigate(from, { replace: true })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  const goggleLog =()=>
  {
    goggle(provider)
  }
  return (
    <>
    <div>
      <div>
        <div className="hero bg-base-200 min-h-screen items-center w-full">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left"></div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <p className="text-gray-300">
                    Don't have an account?{" "}
                    <Link
                      to="/Register"
                      className="text-emerald-700 hover:underline"
                    >
                      Register
                    </Link>
                  </p>

                  <button className="btn btn-neutral mt-4">Login</button>
                </form>
                  <button onClick={goggleLog} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
</>
  );
};

export default Login;
