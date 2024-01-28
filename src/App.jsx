import { useState } from "react";
import Edit from "./edit";
import Items from "./items";
import Button from "./button";
import "./App.css";

function App() {
  const [selectedKey, setSelectedKey] = useState(null);

  function handleAdd() {
    const uniqueKey = Date.now();
    localStorage.setItem(uniqueKey, "新規メモ");
    setSelectedKey(uniqueKey);
  }

  function handleDelete(key) {
    localStorage.removeItem(key);
    setSelectedKey(null);
  }

  function handleSave(text) {
    localStorage.removeItem(selectedKey);
    const uniqueKey = Date.now();
    if (text.trim() === "") {
      localStorage.setItem(uniqueKey, "新規メモ");
    } else {
      localStorage.setItem(uniqueKey, text);
    }
    setSelectedKey(uniqueKey);
  }

  function handleClear() {
    localStorage.clear();
    setSelectedKey(null);
  }

  return (
    <div className="container">
      <div className="index">
        <Items handleEdit={setSelectedKey} />
        <Button handleAdd={handleAdd} handleClear={handleClear} />
      </div>

      <div className="edit">
        {selectedKey && (
          <Edit
            handleSave={handleSave}
            handleDelete={handleDelete}
            item_key={selectedKey}
            item_value={localStorage.getItem(selectedKey)}
            key={selectedKey}
          />
        )}
      </div>
    </div>
  );
}

export default App;
