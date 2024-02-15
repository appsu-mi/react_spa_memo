import { useLoginStatus } from "./LoginContext.jsx";

export default function LoginButton() {
  const { isLogin, handleLoginStatus } = useLoginStatus();
  const loginStatus = isLogin ? "ログアウト" : "ログイン";

  return (
    <div className="login-button-container">
      <button className="login-button" onClick={handleLoginStatus}>
        {loginStatus}
      </button>
    </div>
  );
}
