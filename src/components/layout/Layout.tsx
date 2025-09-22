import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import "./Layout.css";

export function Layout() {
  return (
    <>
      <Navbar />
      <main className="layout-children-container">
        <Outlet />
      </main>
    </>
  );
}
