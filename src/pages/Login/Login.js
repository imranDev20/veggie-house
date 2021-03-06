import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
  useAuthState,
} from "react-firebase-hooks/auth";
import app from "../../firebase";
import { getAuth } from "firebase/auth";
import GoogleSignInButton from "../Shared/GoogleSignInButton";
import useFromRedirect from "../../hooks/useFormRedirect";
import useLoadingAnimation from "../../hooks/useLoadingAnimation";
import ScaleLoader from "react-spinners/ScaleLoader";
import useEmailValidate from "../../hooks/useEmailValidate";
import { toast } from "react-toastify";
import axios from "axios";

const auth = getAuth(app);

const Login = () => {
  // States
  const [password, setPassword] = useState("");

  // Hooks
  const scaleLoaderCss = useLoadingAnimation();
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [user] = useAuthState(auth);

  const [signInWithEmailAndPassword, createdUser, signInloading, signInError] =
    useSignInWithEmailAndPassword(auth);

  // Custom Hooks
  const { handleEmailChange, email, isValidEmail, emailMessage } =
    useEmailValidate();

  const { from, navigate } = useFromRedirect();

  // Functions
  const handleSignIn = async () => {
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/login`,
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    if (!signInError) {
      navigate(from, { replace: true });
    }
  };

  // user && navigate("/");

  return (
    <div className="container mx-auto px-10 my-10  ">
      <div className="max-w-sm mx-auto flex flex-col shadow-lg border rounded-lg py-7 px-5">
        <h2 className="text-center text-4xl text-neutral-700 mb-3">Login</h2>
        <input
          className="bg-neutral-100 px-5 outline-none focus:ring-2 focus:ring-orange-500 rounded py-2 my-3"
          type="email"
          required
          onChange={(e) => handleEmailChange(e)}
          placeholder="Email"
        />
        <p
          className={`${
            isValidEmail ? `text-green-500` : `text-red-500`
          } text-sm ml-5 `}
        >
          {emailMessage}
        </p>

        <input
          className="bg-neutral-100 px-5 outline-none focus:ring-2 focus:ring-orange-500 rounded py-2  my-3"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <span className="ml-3 text-sm  text-neutral-500 mb-5">
          Forgot password?{" "}
          <button
            onClick={async () => {
              if (email !== "") {
                await sendPasswordResetEmail(email);
                toast("Password reset link sent.");
              } else {
                toast("Empty email. Please provide an email");
              }
            }}
            className="hover:text-green-600"
          >
            Send reset link.
          </button>
        </span>

        <button
          onClick={handleSignIn}
          className="bg-green-600/30 text-green-600 font-medium hover:bg-green-600 hover:text-white transition cursor-pointer px-5 rounded py-2  my-2 flex items-center justify-center"
        >
          Login
          {signInloading && (
            <ScaleLoader
              css={scaleLoaderCss}
              size={5}
              height={15}
              width={3}
              color={"#fff"}
              speedMultiplier={1}
            />
          )}
        </button>
        <p className="ml-3 text-red-500">
          {signInError?.message ? signInError?.message : ""}
        </p>

        {/* Google Sign in component */}
        <GoogleSignInButton isLogin>Login With Google</GoogleSignInButton>
        <Link
          className="text-center text-sm mt-3 text-neutral-500 hover:text-green-600"
          to="/signup"
        >
          Don't have and account? Sign up instead.
        </Link>
      </div>
    </div>
  );
};

export default Login;
