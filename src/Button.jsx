import { useLoginStatus } from "./LoginContext.jsx";

export default function Button({ handleAdd, handleClear }) {
  const { isLogin } = useLoginStatus();

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
    <></>
  );

  return <>{buttons}</>;
}
