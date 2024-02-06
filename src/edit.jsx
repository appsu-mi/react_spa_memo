import { useState } from "react";

export default function Edit({ handleSave, handleDelete, itemKey, itemValue }) {
  const [text, setText] = useState(itemValue);

  return (
    <div className="edit-container">
      <form>
        <textarea
          className="edit-area"
          autoFocus={true}
          onChange={(e) => setText(e.target.value)}
        >
          {itemValue}
        </textarea>
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
              handleDelete(itemKey);
            }}
          >
            削除
          </button>
        </div>
      </form>
    </div>
  );
}
