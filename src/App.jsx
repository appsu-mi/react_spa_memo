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
    localStorage.setItem(selectedItem, text);
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
