"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import "dotenv/config";
import { Loader } from "@/components/others/Loader";
import { useRouter } from "next/navigation";
import { TokenContext } from "@/context/TokenContext";
import { toast } from "react-toastify";

const Signup = () => {
  const URL = "http://127.0.0.1:8000/api";
  const router = useRouter();
  const { hasToken, setHasToken } = useContext(TokenContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    const resp = await fetch(`${URL}/login/`, {
      method: "POST",
      body: JSON.stringify({
        username: formData.name,
        password: formData.password,
        email: formData.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.token) {
          localStorage.setItem("token", json?.token);
          setHasToken(true)
          setLoading(false)
          // toast.success("Registration Successful.");
          router.push("/Travel", { scroll: false });
        }
      });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // Handle signup logic here using formData
    const res = await fetch(`${URL}/register/`, {
      method: "POST",
      body: JSON.stringify({
        username: formData.name,
        password: formData.password,
        email: formData.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.email[0] === "user with this email already exists.") {
          toast.error("user with this email already exists.");
          setLoading(false);
        }
        if (json.username[0] === "user with this username already exists.") {
          toast.error("user with this username already exists.");
          setLoading(false);
        }
        else {
          toast.success("Registration successful.");
          handleLogin();
        }
      });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100">
      <Loader loaderClass={loading ? "block" : "hidden"} />
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700">
              Password*
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 pr-10"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.293 4.293a1 1 0 0 1 1.414 1.414l-14 14a1 1 0 0 1-1.414-1.414l14-14z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 4a2 2 0 100 4 2 2 0 000-4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link href="/Login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
