"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { auth, createUserWithEmailAndPassword } from "../firebase/firebase";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created:", user);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error creating user:", error);
      alert(error);
    }
  };

  return (
    <div className="flex items-center p-8 justify-center h-[90vh] bg-slate-300">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl text-black font-semibold text-center mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full mt-1 px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className={`w-full mt-1 px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:border-blue-500 text-black`}
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className={`w-full mt-1 px-3 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:border-blue-500 text-black`}
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
