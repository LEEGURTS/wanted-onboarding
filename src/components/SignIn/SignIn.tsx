import { useState } from "react";
import UserInfoInput, { UserInfoInputType } from "../Validation/UserInfoInput";
import { sendSignInResquest } from "../../API/SignInOutAPI";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || "/todo";
  const handleSignIn = () => {
    sendSignInResquest(email, password).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.access_token);
        document.dispatchEvent(new Event("SignIn"));
        navigate(from);
      }
    });
  };

  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-[100svh]">
      <UserInfoInput
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        inputType={UserInfoInputType.SIGNIN}
        onClick={handleSignIn}
      />
    </main>
  );
};

export default SignIn;
