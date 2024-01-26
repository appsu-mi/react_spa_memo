import { useState } from "react";

export default function Edit({ onSubmit, onDelete, memo_key, memo_value }) {
  const [text, setText] = useState(memo_value);

  return (
    <div>
      <form>
        <textarea
          onChange={(e) => setText(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="10"
        >
          {memo_value}
        </textarea>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault(e);
            onSubmit(text);
          }}
        >
          編集
        </button>
        <button
          type="submit"
          onClick={() => {
            onDelete(memo_key);
          }}
        >
          削除
        </button>
      </form>
    </div>
  );
}
