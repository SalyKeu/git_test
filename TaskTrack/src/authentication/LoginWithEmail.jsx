import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginWithEmail() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
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
          <form className="space-y-2">
            <div className="flex flex-col gap-2">
              <label className="text-black text-sm font-sans font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="m@example.com"
                className="w-full p-2 border-black border-2 rounded"
              />
            </div>
            <div className="flex justify-between items-center mt-8">
              <label className="text-black text-sm font-sans font-bold">
                Password
              </label>
              <button className="text-gray-400 text-sm font-sans hover:underline">
                Forgot your password?
              </button>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border-black border-2 rounded"
            />
            <button className="button-primary w-full mt-4">Login</button>
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
