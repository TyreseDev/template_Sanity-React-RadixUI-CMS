import { Tooltip, Dropdown, Input, Button } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import AdvancedSearch from "../../assets/img/advanced-search.png";
import Avatar from "../../assets/img/avatar.png";

const HeaderRightComponent = () => {
  const userItems = [
    {
      key: "1",
      label: (
        <Tooltip content="User Settings" className="flex">
          <p>
            <SettingOutlined className="text-base" />
          </p>
          <p className="mt-1">&nbsp;User Settings</p>
        </Tooltip>
      ),
    },
    {
      key: "2",
      label: (
        <Tooltip content="Logout" className="flex">
          <p>
            <LogoutOutlined className="text-base" />
          </p>
          <p className="mt-1">&nbsp;Logout</p>
        </Tooltip>
      ),
    },
  ];

  const notificationItems = [
    {
      key: "1",
      label: "No notifications...",
    },
  ];

  return (
    <div className="flex float-right">
      <Input
        className="mr-9 w-80"
        placeholder="Search..."
        prefix={<SearchOutlined className="mr-2" />}
        suffix={
          <Button
            icon={<img src={AdvancedSearch} alt="advanced search" />}
            style={{ width: "44px", height: "30px", padding: "0" }}
          />
        }
      />
      <div className="h-6 mx-2 my-0">
        <Tooltip title="Help">
          <QuestionCircleOutlined className="text-base leading-10" />
        </Tooltip>
      </div>
      <Dropdown menu={{ items: notificationItems }} trigger="click">
        <div className="h-6 mx-2">
          <Tooltip title="Notifications">
            <BellOutlined className="text-base leading-10" />
          </Tooltip>
        </div>
      </Dropdown>
      <Dropdown menu={{ items: userItems }} trigger="click">
        <img src={Avatar} alt="avatar" className="h-8 my-1 mx-2" />
      </Dropdown>
    </div>
  );
};

export default HeaderRightComponent;
