import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import doctorImage from "../../assets/Medical research-bro (2) 1@2x.png";
import dnaImage from "../../assets/DNA-bro (1) 1.png";
import LogoImage from "../../assets/Layer_1.png";
import image_7 from "../../assets/image 7.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-start bg-gradient-to-r from-teal-700 via-[#E6F2F2] to-white relative overflow-hidden md:pl-[5%] lg:pl-[9%] px-4 py-8 md:py-0">
      {/* Decorative medical icons - hidden on small screens, visible on medium+ */}
      <div className="absolute right-0 top-0 w-full h-full pointer-events-none hidden md:block">
        {/* Doctor Image */}
        <img
          src={doctorImage}
          alt="Doctor with test tube"
          className="absolute right-[2%] top-[15%] w-3/4 h-3/4 object-contain"
        />

        {/* DNA Image */}
        <img
          src={dnaImage}
          alt="DNA"
          className="absolute bottom-10 right-0"
        />

        {/* Image 7 */}
        <img
          src={image_7}
          alt="Decorative element"
          className="absolute right-[2%] top-[2%] opacity-70"
        />
      </div>

      {/* Centered Content */}
      <div className="z-20 flex flex-col items-center w-full md:max-w-md lg:max-w-lg xl:max-w-xl relative">
        {/* Logo above the login card */}
        <div className="mb-4">
          <img
            src={LogoImage}
            alt="E-Doc Logo"
            className="w-32 h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 object-contain"
          />
        </div>

        {/* Login Card without logo */}
        <div className="bg-white rounded-lg shadow-xl w-full md:w-[90%] lg:w-[90%] p-4 sm:p-6 md:p-8 lg:p-10 relative mx-auto transform -translate-y- md:-translate-y-6 lg:-translate-y-10">
          <form onSubmit={handleLogin} className="space-y-6 md:space-y-8 lg:space-y-10">
            {/* Email Input */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Email Icon */}
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-teal-700">
                <Mail size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[#e1f5f5] text-gray-700 text-base md:text-lg rounded-lg block w-full p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Password Icon */}
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-teal-700">
                <Lock size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-[#e1f5f5] text-gray-700 text-base md:text-lg rounded-lg block w-full p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Mot de passe"
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Login Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-2/3 md:w-1/2 lg:w-[40%] bg-teal-700 hover:bg-teal-800 text-white font-medium text-base md:text-lg py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;