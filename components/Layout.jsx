// to define a general layout
import Navbar from "./Navbar";
import NewComplaint from "./NewComplaint";
import { useState } from "react";
const Layout = ({ children }) => {
  const [newRequest, setNewRequest] = useState(false);
  return (
    <div>
      <Navbar setNewRequest={setNewRequest} />
      <NewComplaint newRequest={newRequest} setNewRequest={setNewRequest} />
      <div className=" bg-[#080d13] min-h-[90vh]">{children}</div>
    </div>
  );
};
export default Layout;
