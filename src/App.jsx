import { useState } from "react";
import Edit from "./edit";
import Items from "./items";
import Button from "./button";
import "./App.css";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  function handleAdd() {
    const uniqueKey = Date.now();
    localStorage.setItem(uniqueKey, "新規メモ");
    setSelectedItem(uniqueKey);
    setIsEdit(true);
  }

  function handleEdit(key) {
    setSelectedItem(key);
    setIsEdit(true);
  }

  function handleDelete(key) {
    localStorage.removeItem(key);
    setIsEdit(false);
  }

  function handleSave(text) {
    if (text.trim() === "") {
      localStorage.setItem(selectedItem, "新規メモ");
    } else {
      localStorage.setItem(selectedItem, text);
    }

    setIsEdit(true);
  }

  function handleClear() {
    localStorage.clear();
  }

  return (
    <div className="container">
      <div className="index">
        <Items handleEdit={handleEdit} />
        <Button handleAdd={handleAdd} handleClear={handleClear} />
      </div>

      <div className="edit">
        {isEdit && (
          <Edit
            handleSave={handleSave}
            handleDelete={handleDelete}
            item_key={selectedItem}
            item_value={localStorage.getItem(selectedItem)}
            key={selectedItem}
          />
        )}
      </div>
    </div>
  );
}

export default App;
