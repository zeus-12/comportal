import Navbar from "./Navbar";
import ComplaintBox from "./ComplaintBox";
import ViewCard from "./ViewCard";
import { useState } from "react";
const Layout = ({ children }) => {
  const [newRequest, setNewRequest] = useState(false);

  return (
    <div>
      <Navbar setNewRequest={setNewRequest} />
      <ViewCard />
      <ComplaintBox newRequest={newRequest} setNewRequest={setNewRequest} />

      <div className="mt-10">{children}</div>
    </div>
  );
};
export default Layout;
