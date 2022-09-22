// to define a general layout
import Navbar from "./Navbar";
import NewComplaint from "./NewComplaint";
import { useState } from "react";
import Notification from "./Notification";
import { NotificationContext } from "../context/NotificationContext";

const Layout = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const [newRequest, setNewRequest] = useState(false);
  return (
    <NotificationContext.Provider
      value={{ message, type, setMessage, setType }}
    >
      <Navbar setNewRequest={setNewRequest} />
      <NewComplaint newRequest={newRequest} setNewRequest={setNewRequest} />
      <div className=" bg-[#080d13] min-h-[92vh]">{children}</div>
      <Notification message={message} type={type} />
    </NotificationContext.Provider>
  );
};
export default Layout;
