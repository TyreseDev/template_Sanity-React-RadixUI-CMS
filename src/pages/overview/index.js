import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Button, Col, Input, Row, Tooltip } from "antd";
import { SearchOutlined, ControlOutlined } from "@ant-design/icons";
import TableComponent from "./components/table";

const Overview = () => {
  const data = useLoaderData();
  const [tableData, setTableData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  data.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    setTableData(data);
  }, [data]);

  useEffect(() => {
    if (searchKeyWord.trim() !== "")
      setTableData(
        data.filter((row) =>
          row?.name.toLowerCase().includes(searchKeyWord.trim().toLowerCase())
        )
      );
    else setTableData(data);
    // eslint-disable-next-line
  }, [searchKeyWord, setTableData]);

  return (
    <div style={{ width: "910px", margin: "80px calc(50vw - 405px)" }}>
      <h1 className="text-4xl	font-bold">Contractors</h1>
      <h5 className="text-sm">
        Lorem ipsum dolor sit amet consectetur. Lacus semper convallis non et
        vel nec sit proin.
      </h5>
      <br />
      <div style={{ boxShadow: "0px 50px 100px 0px rgba(0, 0, 0, 0.1)" }}>
        <Row className="p-4 w-full">
          <Col span={20}>
            <Input
              className="mr-2 h-12"
              placeholder="Search..."
              prefix={<SearchOutlined className="mr-2" />}
              value={searchKeyWord}
              onChange={(e) => setSearchKeyWord(e.target.value)}
            />
          </Col>
          <Col span={4}>
            <Tooltip content="Logout">
              <Button className="flex h-12 text-center float-right px-8">
                <p className="mt-1.5 text-base">Filters&nbsp;</p>
                <p>
                  <ControlOutlined className="mt-1 text-base" />
                </p>
              </Button>
            </Tooltip>
          </Col>
        </Row>
        <Row className="w-full">
          <Col span={24}>
            <TableComponent
              data={tableData}
              selectedRowKeys={selectedRowKeys}
              setSelectedRowKeys={setSelectedRowKeys}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Overview;
