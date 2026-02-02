import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function LoginWithEmail() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      signIn(userCredential.user);
      navigate("/Homepage");
    } catch (error) {
      setError(error.message);
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white/40 backdrop-blur-[3px] fixed inset-0 items-center justify-center flex z-50">
      <div className="bg-white w-100 max-h-[90vh] space-y-4 task-container rounded-lg p-4 relative">
        <button
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-2xl font-bold text-black hover:text-gray-300 transition-colors duration-150"
          onClick={handleClose}
        >
          ×
        </button>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-black font-sans">
            Login to your account
          </h2>
          <p>Enter your email below to login to your account</p>
        </div>
        <div>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-black text-sm font-sans font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="m@example.com"
                className="w-full p-2 border-black border-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center mt-8">
              <label className="text-black text-sm font-sans font-bold">
                Password
              </label>
              <button type="button" className="text-gray-400 text-sm font-sans hover:underline">
                Forgot your password?
              </button>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border-black border-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="button-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <p className="text-center mt-8 text-md font-sans">
              ━━━━━━━ Or continue with ━━━━━━━
            </p>
            <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-4 font-bold button-primary hover:bg-gray-50 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150">
              <FaGoogle className="text-xl text-[#DB4437]" />
              Continue with Google
            </button>
            <p className="text-center mt-8 text-md font-sans">
              Don't have an account?{" "}
              <a href="/register" className="underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginWithEmail;
