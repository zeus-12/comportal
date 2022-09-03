import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-10">{children}</div>
    </div>
  );
};
export default Layout;
