import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import app from "../../firebase";
import { getAuth } from "firebase/auth";
import GoogleSignInButton from "../Shared/GoogleSignInButton";
import { useNavigate, Link } from "react-router-dom";
import useEmailValidate from "../../hooks/useEmailValidate";
import { ScaleLoader } from "react-spinners";
import useLoadingAnimation from "../../hooks/useLoadingAnimation";

const auth = getAuth(app);

const Signup = () => {
  // Hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  // Custom Hooks
  const { handleEmailChange, email, isValidEmail, emailMessage } =
    useEmailValidate();
  const scaleLoaderCss = useLoadingAnimation();

  // States
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);

  // Functions

  const handleCreateUser = () => {
    createUserWithEmailAndPassword(email, password);
  };

  const handleConfirmPassword = (e) => {
    if (password === e.target.value) {
      setIsValidPassword(true);
      setConfirmPassword(e.target.value);
      setPasswordMessage("Passwords match");
    } else {
      setIsValidPassword(false);
      setPasswordMessage("Passwords don't match");
    }
  };

  user && navigate("/");

  return (
    <div className="container mx-auto px-10 my-10  ">
      <div className="max-w-sm mx-auto flex flex-col shadow-lg border rounded-lg py-7 px-5">
        <h2 className="text-center text-4xl text-neutral-700 mb-3">Sign Up</h2>

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
        <input
          className="bg-neutral-100 px-5 outline-none focus:ring-2 focus:ring-orange-500 rounded py-2  my-3"
          type="password"
          required
          onChange={(e) => handleConfirmPassword(e)}
          placeholder="Confirm Password"
        />
        <p
          className={`${
            isValidPassword ? `text-green-500` : `text-red-500`
          } text-sm ml-5 `}
        >
          {passwordMessage}
        </p>

        <button
          onClick={handleCreateUser}
          className="bg-green-600/30 text-green-600 font-medium hover:bg-green-600 hover:text-white transition cursor-pointer px-5 rounded py-2  my-2 flex items-center justify-center"
        >
          Sign Up
          {loading && (
            <ScaleLoader
              css={scaleLoaderCss}
              size={5}
              height={13}
              width={3}
              color={"#fff"}
              speedMultiplier={1}
            />
          )}
        </button>
        <p className="ml-5 text-sm text-red-500">
          {error?.message ? error?.message : ""}
        </p>
        {/*  */}
        <GoogleSignInButton isSignUp>Sign Up With Google</GoogleSignInButton>
        <Link
          className="text-center text-sm mt-3 text-neutral-500 hover:text-green-600 "
          to="/login"
        >
          Already a member? Login instead.
        </Link>
      </div>
    </div>
  );
};

export default Signup;
