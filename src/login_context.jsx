import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);

  function handleLogin() {
    isLogin === false ? setIsLogin(true) : setIsLogin(false);
  }

  return (
    <LoginContext.Provider value={{ isLogin, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
export const useLogin = () => useContext(LoginContext);
