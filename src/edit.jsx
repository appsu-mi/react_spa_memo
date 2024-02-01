import { useState } from "react";
import { useLogin } from "./login_context.jsx";

export default function Edit({
  handleSave,
  handleDelete,
  item_key,
  item_value,
}) {
  const [text, setText] = useState(item_value);
  const { isLogin, handleLogin } = useLogin();
  const test = isLogin ? (
    <div className="edit-button">
      <button
        className="save-button"
        type="submit"
        onClick={(e) => {
          e.preventDefault(e);
          handleSave(text);
        }}
      >
        編集
      </button>
      <button
        className="delete-button"
        type="submit"
        onClick={() => {
          handleDelete(item_key);
        }}
      >
        削除
      </button>
    </div>
  ) : (
    <div></div>
  );

  return (
    <div className="edit-container">
      <form>
        <textarea
          className="edit-area"
          autoFocus={true}
          onChange={(e) => setText(e.target.value)}
        >
          {item_value}
        </textarea>
        {test}
      </form>
    </div>
  );
}
