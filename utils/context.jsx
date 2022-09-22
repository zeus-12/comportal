// create a react context
import { Children, createContext, useState } from "react";
export const NotificationContext = createContext();

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [userImg, setUserImg] = useState(null);

  <AuthContext.Provider value={{ userName, setUserName, userImg, setUserImg }}>
    {children}
  </AuthContext.Provider>;
};
