import Navbar from "./Navbar";
import ComplaintBox from "./ComplaintBox";
import ComplaintModal from "./ComplaintModal";
import { useState } from "react";
const Layout = ({ children }) => {
  const [newRequest, setNewRequest] = useState(false);

  return (
    <div>
      <Navbar setNewRequest={setNewRequest} />
      <ComplaintModal />
      <ComplaintBox newRequest={newRequest} setNewRequest={setNewRequest} />

      <div className="mt-18">{children}</div>
    </div>
  );
};
export default Layout;
