import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication (replace with actual logic)
    if (email === "admin@example.com" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0A0908] text-white">
      <div className="bg-[#23333B] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-[#866A9A] text-white border border-[#7A3B69] focus:outline-none focus:ring-2 focus:ring-[#7A3B69]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-[#866A9A] text-white border border-[#7A3B69] focus:outline-none focus:ring-2 focus:ring-[#7A3B69]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#7A3B69] hover:bg-[#563440] transition-all p-2 rounded font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
