import { useState } from "react";

export default function Edit({
  handleSave,
  handleDelete,
  item_key,
  item_value,
}) {
  const [text, setText] = useState(item_value);

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
          {item_value}
        </textarea>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault(e);
            handleSave(text);
          }}
        >
          編集
        </button>
        <button
          type="submit"
          onClick={() => {
            handleDelete(item_key);
          }}
        >
          削除
        </button>
      </form>
    </div>
  );
}
