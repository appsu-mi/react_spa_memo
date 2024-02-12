import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  function handleLoginStatus() {
    setIsLogin(!isLogin);
  }

  return (
    <LoginContext.Provider value={{ isLogin, handleLoginStatus }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginStatus = () => useContext(LoginContext);
