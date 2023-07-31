import { Col, Row } from "antd";
import HeaderLeftComponent from "./left";
import HeaderRightComponent from "./right";

const HeaderComponent = () => {
  return (
    <Row className="h-10 leading-10 mt-4">
      <Col span={8}>
        <HeaderLeftComponent />
      </Col>
      <Col span={16}>
        <HeaderRightComponent />
      </Col>
    </Row>
  );
};

export default HeaderComponent;
