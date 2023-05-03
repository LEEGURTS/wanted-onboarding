import { useState } from "react";
import UserInfoInput, { UserInfoInputType } from "../Validation/UserInfoInput";
import { useNavigate } from "react-router-dom";
import { sendSignUpRequest } from "../../API/SignInOutAPI";

const SignUp: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSignUp = () => {
    sendSignUpRequest(email, password)
      .then((res) => {
        if (res.status === 201) {
          navigate("/signin");
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-[100svh]">
      <UserInfoInput
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        inputType={UserInfoInputType.SIGNUP}
        onClick={handleSignUp}
      />
    </main>
  );
};

export default SignUp;
