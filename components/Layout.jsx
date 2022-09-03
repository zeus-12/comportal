import Navbar from "./Navbar";
import ComplaintBox from "./ComplaintBox";
import { useState } from "react";
const Layout = ({ children }) => {
  const [newRequest, setNewRequest] = useState(false);

  return (
    <div>
      <Navbar setNewRequest={setNewRequest} />
      <ComplaintBox newRequest={newRequest} setNewRequest={setNewRequest} />
      <div className="mt-18">{children}</div>
    </div>
  );
};
export default Layout;
