import { useState } from "react";

const useEmailValidate = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");

  const emailRegex = /\S+@\S+\.\S+/;
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailRegex.test(email)) {
      setIsValidEmail(true);
      setEmailMessage("Your email looks good!");
    } else {
      setIsValidEmail(false);
      setEmailMessage("Please enter a valid email!");
    }
  };
  return { email, isValidEmail, emailMessage, handleEmailChange };
};

export default useEmailValidate;
