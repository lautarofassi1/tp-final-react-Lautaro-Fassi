import Navbar from "./CustomNavbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Outlet />
      </main>
    </>
  );
}