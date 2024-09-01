import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="modal-box pt-7 mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-2xl"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg space-x-5">Signup</h3>

          {/* Name */}
          <div className="text-left mt-4 space-y-3 ml-4">
            <label htmlFor="name-input" className="hover:cursor-pointer">
              Name
            </label>
            <input
              type="text"
              id="name-input"
              placeholder="Enter your name..."
              className="w-full px-3 border rounded-md outline-none py-2"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="text-left mt-4 space-y-3 ml-4">
            <label htmlFor="email-input" className="hover:cursor-pointer">
              Email
            </label>
            <input
              type="email"
              id="email-input"
              placeholder="Enter your email..."
              className="w-full px-3 border rounded-md outline-none py-2"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Password */}
          <div className="text-left mt-4 space-y-3 ml-4">
            <label htmlFor="pass-input" className="hover:cursor-pointer">
              Password
            </label>
            <input
              type="password"
              id="pass-input"
              placeholder="Enter your password..."
              className="w-full px-3 border rounded-md outline-none py-2"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-around mt-5">
            <button type="submit" className="btn btn-outline btn-secondary">
              Signup
            </button>
            <div className="my-auto">
              <span>Have an account? </span>
              <button
                type="button"
                className="underline text-blue-500 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              {/* Login Modal */}
              <Login />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
