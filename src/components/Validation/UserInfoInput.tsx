import { checkEmail, checkPassword } from "./Validation";

interface UserInfoInputProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  inputType: UserInfoInputType;
  onClick?: () => void;
}

export enum UserInfoInputType {
  SIGNIN,
  SIGNUP,
}

const UserInfoInput: React.FunctionComponent<UserInfoInputProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  inputType,
  onClick = () => {},
}) => {
  return (
    <main className="flex flex-col items-center justify-center">
      <input
        className="border rounded-[5px] p-2"
        data-testid="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border rounded-[5px] p-2"
        type="password"
        data-testid="password-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="border rounded-[5px] p-2"
        disabled={!checkEmail(email) || !checkPassword(password)}
        data-testid={
          inputType === UserInfoInputType.SIGNIN
            ? "signin-button"
            : "signup-button"
        }
        onClick={onClick}
      >
        {inputType === UserInfoInputType.SIGNIN ? "로그인" : "회원가입"}
      </button>
    </main>
  );
};

export default UserInfoInput;
