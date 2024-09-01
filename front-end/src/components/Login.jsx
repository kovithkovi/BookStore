import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const modalRef = useRef(null); // Create a ref to access the modal
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const closeModalAndNavigate = () => {
    modalRef.current.close(); // Close the modal
    navigate("/"); // Navigate to the home page
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModalAndNavigate} // Close modal and navigate
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="text-left mt-4 space-y-3 ml-4">
              <label htmlFor="email-input" className="hover:cursor-pointer">
                Email
              </label>
              <br />
              <input
                type="email"
                id="email-input"
                placeholder="Enter your email..."
                className="w-full px-3 border rounded-md outline-none py-2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Password */}
            <div className="text-left mt-4 space-y-3 ml-4">
              <label htmlFor="pass-input" className="hover:cursor-pointer">
                Password
              </label>
              <br />
              <input
                type="password"
                id="pass-input"
                placeholder="Enter your password..."
                className="w-full px-3 border rounded-md outline-none py-2"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex justify-around mt-5">
              <button className="btn btn-outline btn-secondary">Login</button>
              <p className="text-l my-auto">
                Not registered?{" "}
                <a
                  href="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </a>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
