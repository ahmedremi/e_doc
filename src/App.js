import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import "./App.css";
import doctorImage from './assets/Medical research-bro (2) 1.png';
import dnaImage from './assets/DNA-bro (1) 1.png';
import esiLogoImage from './assets/image 4.png';
import LogoImage from './assets/Layer_1.png';
import image_7 from './assets/image 7.png';

function App() {
  // State for username and password
  const [username, setUsername] = useState('this');
  const [password, setPassword] = useState('this');
  const [error, setError] = useState(''); // For error messages
  const [loading, setLoading] = useState(false); // For loading state

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true); // Set loading state
    setError(''); // Clear previous errors

    try {
      // Send login request to the backend
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // Handle response
      if (response.ok) {
        // Save the token to localStorage
        localStorage.setItem('token', data.token);
        // Redirect to dashboard or home page
        window.location.href = '/dashboard';
      } else {
        // Display error message
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      // Handle network errors
      setError('Network error. Please try again.');
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-start bg-gradient-to-r from-teal-700 via-[#E6F2F2] to-white relative overflow-hidden pl-20">
      {/* Decorative medical icons */}
      <div className="absolute right-0 top-0 w-full h-full pointer-events-none">
        {/* Doctor Image */}
        <img
          src={doctorImage}
          alt="Doctor with test tube"
          className="absolute right-[18%] top-[15%]"
        />

        {/* DNA Image */}
        <img
          src={dnaImage}
          alt="DNA"
          className="absolute bottom-10 right-0"
        />

        {/* Image 7 */}
        <>
          <img
            src={image_7}
            alt="Decorative element"
            className="absolute right-[2%] top-[2%] opacity-70"
          />
        </>
      </div>

      {/* Centered Content */}
      <div className="z-20 flex flex-col items-center max-w-2xl">
        {/* Logo - Centered */}
        <div className="mb-8 flex justify-center">
          <img
            src={LogoImage}
            alt="E-Doc Logo"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Login Card  */}
        <div className="bg-white rounded-lg shadow-xl w-[130%] h-[120%] p-10 relative">
  <form onSubmit={handleLogin} className="space-y-10">
    {/* Username Input */}
    <div className="flex items-center gap-4">
      {/* Email Icon */}
      <div className="flex items-center justify-center w-12 h-12 text-teal-700">
        <Mail size={20} />
      </div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="flex-1 bg-[#e1f5f5] text-gray-700 text-lg rounded-lg block w-full p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
        placeholder="Nom d'utilisateur"
        required
      />
    </div>

    {/* Password Input */}
    <div className="flex items-center gap-4">
      {/* Password Icon */}
      <div className="flex items-center justify-center w-12 h-12 text-teal-700">
        <Lock size={20} />
      </div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="flex-1 bg-[#e1f5f5] text-gray-700 text-lg rounded-lg block w-full p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
        className="w-[70%] bg-teal-700 hover:bg-teal-800 text-white font-medium text-lg py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
      >
        {loading ? 'Logging in...' : 'Log in'}
      </button>
    </div>
  </form>
</div>
      </div>
    </div>
  );
}

export default App;