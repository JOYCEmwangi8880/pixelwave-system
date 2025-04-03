import { Outlet } from "react-router-dom";
import MainHeader from "../Components/MainHeader"
import Footer from "../Components/Footer"

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <main className="">
        <Outlet /> 
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;