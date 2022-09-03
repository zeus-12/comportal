import Navbar from "./Navbar";
// import ComplaintBOx from './ComplaintBox'
import ViewCard from "./ViewCard"
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <ViewCard/>
      {/* <ComplaintBOx/> */}

      {children}

      <div className="mt-10">{children}</div>
    </div>
  );
};
export default Layout;
