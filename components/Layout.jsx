// to define a general layout
import Navbar from "./Navbar";
import NewComplaint from "./NewComplaint";
import { useState } from "react";
import Notification from "./Notification";
import { AuthContext, NotificationContext } from "../utils/context";
const Layout = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const [newRequest, setNewRequest] = useState(false);

  const [userName, setUserName] = useState(null);
  const [userImg, setUserImg] = useState(null);
  return (
    <AuthContext.Provider
      value={{ userName, setUserName, userImg, setUserImg }}
    >
      <NotificationContext.Provider
        value={{ message, type, setMessage, setType }}
      >
        <Navbar setNewRequest={setNewRequest} />
        <NewComplaint newRequest={newRequest} setNewRequest={setNewRequest} />
        <div className=" bg-[#080d13] min-h-[92vh]">{children}</div>
        <Notification message={message} type={type} />
      </NotificationContext.Provider>
    </AuthContext.Provider>
  );
};
export default Layout;
