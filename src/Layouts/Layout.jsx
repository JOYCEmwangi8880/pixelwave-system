import { Outlet } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Layout = () => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet /> {/* This renders the child route component */}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;