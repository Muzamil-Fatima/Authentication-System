
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        className="bg-white p-10 rounded-2xl shadow-lg w-96 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center">
          Login to{" "}
          <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            TecHub
          </span>
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none"
          required
        />
        <button className="w-full bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:opacity-90">
          Login
        </button>
        <p className="text-sm text-center text-gray-500">
          Forgot Password?{" "}
          <Link to="/forget-password" className="text-purple-500 underline">
            Click here
          </Link>
        </p>
        <p className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-500 underline">
            Sign Up
          </Link>
        </p>
        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        {/* Google Login UI */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
