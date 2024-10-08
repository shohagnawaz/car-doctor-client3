import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {loginUser} = useContext(AuthContext);
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => console.log(error))
  }
  return (
    <div className="hero bg-base-200 min-h-screen mt-4">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-20">
            <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login"/>
            </div>
          </form>
          <p className="pb-6 text-center">New to car doctor, please 
            <Link className="text-orange-700 font-bold" to="/signUp"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
