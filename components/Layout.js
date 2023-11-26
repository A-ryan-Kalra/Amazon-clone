import Nav from "./Nav";
import Footer from "./Footer";

function Layout({ children, toggle }) {
  return (
    <div className="">
      <Nav />
      {children}
    </div>
  );
}

export default Layout;
