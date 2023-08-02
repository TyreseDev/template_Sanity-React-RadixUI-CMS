import React from "react";
import { Outlet } from "react-router-dom";
import HeaderCompoent from "../../components/header";
import NavigationComponent from "../../components/navigation";

const MainLayout: React.FC = () => (
  <section className="w-full h-full absolute top-0 left-0">
    <header className="w-full h-[72px] absolute top-0 left-0 py-0 px-9">
      <HeaderCompoent />
    </header>
    <nav className="w-full h-[40px] absolute top-[72px] left-0 py-0 px-9 border-t border-b border-gray-200">
      <NavigationComponent />
    </nav>
    <main className="w-full absolute top-[112px] left-0">
      <Outlet />
    </main>
  </section>
);

export default MainLayout;
