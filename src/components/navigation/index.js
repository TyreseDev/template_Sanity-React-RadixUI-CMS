import { Menu } from "antd";
import "./index.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const NavigationComponent = () => {
  const items = [
    {
      label: <Link to="/overview">Overview</Link>,
      key: "/overview",
    },
    {
      label: <Link to="/tasks">Tasks</Link>,
      key: "/tasks",
    },
    {
      label: <Link to="/projects">Projects</Link>,
      key: "/projects",
    },
    {
      label: <Link to="/payments">Payments</Link>,
      key: "/payments",
    },
    {
      label: <Link to="/users">Users</Link>,
      key: "/users",
    },
  ];

  const current = useLocation().pathname;
  return (
    <Menu
      className="navigation"
      selectedKeys={[current]}
      items={items}
      mode="horizontal"
    />
  );
};

export default NavigationComponent;
