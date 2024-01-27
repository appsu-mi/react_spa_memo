import { useState } from "react";
import Edit from "./edit";
import Items from "./items";
import Button from "./button";
import "./App.css";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [editMemo, setEditMemo] = useState(0);

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
        <Items handleEdit={handleEdit} />
        <Button handleAdd={handleAdd} handleClear={handleClear} />
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
