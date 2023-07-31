import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Button, Col, Input, Row, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import TableComponent from "./components/table";
import FilterButtonIcon from "../../assets/img/filter-button.png";

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
    <div className="w-[910px] my-20 mx-auto">
      <h1 className="text-4xl	font-bold mb-2">Contractors</h1>
      <h5 className="text-sm">
        Lorem ipsum dolor sit amet consectetur. Lacus semper convallis non et
        vel nec sit proin.
      </h5>
      <br />
      <br />
      <div className="shadow-2xl">
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
              <Button className="flex h-12 float-right px-8">
                <p className="mt-2 text-base">Filters&nbsp;&nbsp;</p>
                <img
                  className="mt-3 w-4 h-4"
                  src={FilterButtonIcon}
                  alt="filter button"
                />
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
