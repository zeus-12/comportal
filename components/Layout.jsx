import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mt-10">{children}</div>
    </div>
  );
};
export default Layout;
