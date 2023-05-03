import { useNavigate } from "react-router-dom";

const Index: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <main className="w-screen min-h-[100svh] flex flex-col items-center justify-center">
      <button
        className="border rounded-[5px] p-2"
        onClick={() => navigate("/signin")}
      >
        로그인하기
      </button>
      <button
        className="border rounded-[5px] p-2"
        onClick={() => navigate("/signup")}
      >
        회원가입하기
      </button>
    </main>
  );
};

export default Index;
