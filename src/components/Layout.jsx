import Navbar from "./CustomNavbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


export default function Layout() {
  return (
    <>
      <Navbar />
      <main className=" page-content d-flex justify-content-center align-items-center flex-column mt-5 w-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}