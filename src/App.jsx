import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Edit from "./Edit";
import Items from "./Items";
import Button from "./Button";
import LoginButton from "./Login_button";
import { LoginContextProvider } from "./Login_context.jsx";
import "./App.css";

export default function App() {
  const [selectedKey, setSelectedKey] = useState(null);
  const [isError, setIsError] = useState(false);

  const errorMessage = isError ? (
    <div className="error-blank">内容が空のようです</div>
  ) : null;

  function handleAdd() {
    const uniqueKey = uuidv4();
    localStorage.setItem(uniqueKey, "新規メモ");
    setSelectedKey(uniqueKey);
    setIsError(false);
  }

  function handleDelete(key) {
    localStorage.removeItem(key);
    setSelectedKey(null);
    setIsError(false);
  }

  function handleEdit(key) {
    setSelectedKey(key);
    setIsError(false);
  }

  function handleSave(text) {
    if (text.trim() === "") {
      setIsError(true);
    } else {
      localStorage.setItem(selectedKey, text);
    }
  }

  function handleClear() {
    localStorage.clear();
    setSelectedKey(null);
    setIsError(false);
  }

  return (
    <LoginContextProvider>
      <div className="container">
        <LoginButton />
        <div className="flex-container">
          <div className="index">
            <Items handleEdit={handleEdit} />
            <Button handleAdd={handleAdd} handleClear={handleClear} />
          </div>
          <div className="edit">
            {errorMessage}
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
      </div>
    </LoginContextProvider>
  );
}
