import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import usePublic from "../Hook/usePublic";
const Login = () => {
  const axiosSecure = usePublic();
  const { loginUser, setLoading, loading, googleLogin } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading2, serLoading2] = useState(false);
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    if (loading) return;
    setLoading(true);
    try {
      await loginUser(email, password);
      toast.success("Login successful!");
      navigate(location.state ? location.state : "/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      serLoading2(true);
      const res = await googleLogin();
      const user = res?.user;
      const { data } = await axiosSecure.post(`/users/${user?.email}`, {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      });
      console.log(data);
      navigate(location.state ? location.state : "/");
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    } finally {
      serLoading2(false);
    }
  };

  return (
    <div className="py-10">
      <div className="flex justify-center items-center  min-h-[calc(100vh-300px)]">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Log In</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                  {...register("email")}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 bg-gray-200 text-gray-900"
                  {...register("password")}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-50 border py-2 border-transparent hover:border-blue-200 hover:text-black text-white w-full duration-300"
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="animate-spin m-auto" />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
          <div className="space-y-1">
            <button className="text-xs hover:underline hover:text-blue-500 text-gray-400">
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center space-x-2 border my-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            {loading2 ? (
              <AiOutlineLoading3Quarters className="animate-spin m-auto" />
            ) : (
              <>
                <FcGoogle size={25} />
                <p>Continue with Google</p>
              </>
            )}
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Don&apos;t have an account yet?{" "}
            <Link
              to="/register"
              className="hover:underline hover:text-blue-500 text-gray-600"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
