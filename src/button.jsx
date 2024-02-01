import { useLogin } from "./login_context.jsx";

export default function Button({ handleAdd, handleClear }) {
  const { isLogin, handleLogin } = useLogin();

  const buttons = isLogin ? (
    <div>
      <button className="add-button" onClick={handleAdd}>
        +
      </button>
      <button className="clear-button" onClick={handleClear}>
        clear
      </button>
    </div>
  ) : (
    <div></div>
  );

  return <div>{buttons}</div>;
}
