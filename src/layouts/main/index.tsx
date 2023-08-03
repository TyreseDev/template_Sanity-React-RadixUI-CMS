import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/header";
import NavigationComponent from "../../components/navigation";

const MainLayout: React.FC = () => (
  <section className="w-full h-full absolute top-0 left-0">
    <header className="w-full h-[72px] absolute top-0 left-0 py-0 px-9">
      <HeaderComponent />
    </header>
    <section
      className="w-full absolute top-[72px] left-0 bg-gradient-to-r from-[#FCFFFD] to-[#F2F1FF]"
      style={{ height: "calc(100% - 72px)" }}
    >
      <div
        className="w-full absolute top-0 left-0 bg-white"
        style={{ height: "calc(50% - 36px)" }}
      />
      <nav className="w-full h-[40px] absolute top-0 left-0 py-0 px-9 border-t border-b border-gray-200">
        <NavigationComponent />
      </nav>
      <main className="w-full absolute top-[40px] left-0">
        <Outlet />
      </main>
    </section>
  </section>
);

export default MainLayout;
