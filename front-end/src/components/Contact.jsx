import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";

function Contact() {
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
          <h3 className="font-bold text-4xl space-x-5">Contact Us</h3>

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

          {/* message */}
          <div className="text-left mt-4 space-y-3 ml-4">
            <label htmlFor="message-input" className="hover:cursor-pointer">
              Message
            </label>
            <textarea
              type="text"
              id="message-input"
              placeholder="Enter your message..."
              className="w-full px-3 border rounded-md outline-none py-2"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-5 ml-5">
            <button className="btn btn-active btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
