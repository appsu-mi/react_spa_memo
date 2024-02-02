import { useLoginStatus } from "./login_context.jsx";

export default function LoginButton() {
  const { isLogin, handleLogin } = useLoginStatus();
  const loginStatus = isLogin ? "ログアウト" : "ログイン";

  return (
    <div className="login-button-container">
      <button className="login-button" onClick={handleLogin}>
        {loginStatus}
      </button>
    </div>
  );
}
