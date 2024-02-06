import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Edit from "./Edit";
import Items from "./Items";
import Button from "./Button";
import "./App.css";

export default function App() {
  const [selectedKey, setSelectedKey] = useState(null);

  function handleAdd() {
    const uniqueKey = uuidv4();
    localStorage.setItem(uniqueKey, "新規メモ");
    setSelectedKey(uniqueKey);
  }

  function handleDelete(key) {
    localStorage.removeItem(key);
    setSelectedKey(null);
  }

  function handleSave(text) {
    localStorage.removeItem(selectedKey);
    const uniqueKey = uuidv4();
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
            itemKey={selectedKey}
            itemValue={localStorage.getItem(selectedKey)}
            key={selectedKey}
          />
        )}
      </div>
    </div>
  );
}
