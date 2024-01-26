import { useState } from "react";
import Edit from "./edit";
import "./App.css";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [editMemo, setEditMemo] = useState(0);

  const keys = Object.keys(localStorage);
  const sorted_keys = keys.toSorted((a, b) => a - b);

  const items = sorted_keys.map((key) => {
    return (
      <li onClick={() => handleEdit(key)} key={key}>
        {localStorage.getItem(key).split("\n")[0]}
      </li>
    );
  });

  function handleAdd() {
    const uniqueKey = Date.now();
    localStorage.setItem(uniqueKey, "新規メモ");
    setEditMemo(uniqueKey);
    setIsEdit(true);
  }

  function handleEdit(key) {
    setEditMemo(key);
    setIsEdit(true);
  }

  function handleDelete(key) {
    localStorage.removeItem(key);
    setIsEdit(false);
  }

  function handleSave(text) {
    localStorage.setItem(editMemo, text);
    setIsEdit(true);
  }

  function handleClear() {
    localStorage.clear();
  }

  return (
    <div>
      <div>
        <ul className="index">{items}</ul>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleClear}>clear</button>
      </div>

      <div className="App">
        {isEdit && (
          <Edit
            onSubmit={handleSave}
            onDelete={handleDelete}
            memo_key={editMemo}
            memo_value={localStorage.getItem(editMemo)}
            key={editMemo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
