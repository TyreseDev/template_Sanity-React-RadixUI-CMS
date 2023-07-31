import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import HeaderCompoent from "../../components/header";
import NavigationComponent from "../../components/navigation";
import "./index.css";

const MainLayout = () => {
  return (
    <Layout className="w-full h-full bg-transparent">
      <Layout.Header className="bg-transparent h-18 py-0 px-9">
        <HeaderCompoent />
      </Layout.Header>
      <Layout.Header className="bg-transparent h-10 py-0 px-9 border-t border-b border-gray-200">
        <NavigationComponent />
      </Layout.Header>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default MainLayout;
