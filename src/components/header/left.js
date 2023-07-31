import { Typography, Dropdown } from "antd";
import Logo from "../../assets/img/logo.png";
import Avatar from "../../assets/img/avatar.png";
import UpDownButton from "../../assets/img/up-and-down.png";
import { Link } from "react-router-dom";

const HeaderLeftComponent = () => {
  return (
    <div className="flex">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-6 h-6 m-2 cursor-pointer" />
      </Link>
      <div className="h-10 w-1 border-r-2 border-gray-200 mx-2" />
      <Dropdown
        menu={{
          items: [
            {
              key: "1",
              label: (
                <Typography.Title
                  level={5}
                  className="h-6 leading-6 my-2 cursor-pointer flex"
                >
                  <img src={Avatar} alt="avatar" className="w-6 h-6 mx-2" />
                  Teqqed
                </Typography.Title>
              ),
            },
            {
              key: "2",
              label: (
                <Typography.Title
                  level={5}
                  className="h-6 leading-6 my-2 cursor-pointer flex"
                >
                  <img src={Avatar} alt="avatar" className="w-6 h-6 mx-2" />
                  Teqqed
                </Typography.Title>
              ),
            },
          ],
        }}
        trigger="click"
      >
        <Typography.Title
          level={5}
          className="h-6 leading-6 my-2 cursor-pointer flex"
        >
          <img src={Avatar} alt="avatar" className="w-6 h-6 mx-2" />
          Teqqed
          <img
            src={UpDownButton}
            alt="up-down select"
            className="w-4 h-4 my-1 mx-2"
          />
        </Typography.Title>
      </Dropdown>
    </div>
  );
};

export default HeaderLeftComponent;
