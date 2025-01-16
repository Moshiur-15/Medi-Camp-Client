import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { imgUp } from "../api/Utils";
import useAuth from "../Hook/useAuth";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import usePublic from "../Hook/usePublic";

const Register = () => {
  const { createUser, updateUserProfile, loading, setLoading, googleLogin } =
    useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const axiosSecure = usePublic();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const img = data.image[0];

    if (loading) return;
    setLoading(true);

    try {
      const imgData = await imgUp(img);
      await createUser(email, password);
      await updateUserProfile(name, imgData);
      const { data } = await axiosSecure.post(`/users/${email}`, {
        name: name,
        email: email,
        photo: imgData,
      });
      console.log(data);
      reset();
      toast.success("Registration successful!");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const res = await googleLogin();
      const user = res?.user;
      const { data } = await axiosSecure.post(`/users/${user?.email}`, {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      });
      console.log(data);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100vh-300px)] my-10">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register Now!</h1>
            <p className="text-sm text-gray-400">
              Welcome to Medical Camp Management System
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-0 bg-gray-200 text-gray-900"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  {...register("image", { required: "Image is required" })}
                />
                {errors.image && (
                  <span className="text-red-500 text-sm">
                    {errors.image.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-0 bg-gray-200 text-gray-900"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-0 bg-gray-200 text-gray-900"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 w-full rounded-md py-3 text-white"
                disabled={loading}
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="animate-spin m-auto" />
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Register with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={25} />
            <p>Continue with Google</p>
          </div>

          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="hover:underline hover:text-blue-500 text-gray-600"
            >
              Login.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
