import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MagnifyingGlassIcon, MixerVerticalIcon } from "@radix-ui/react-icons";
import Table from "./components/table";
import { TableRowData } from "../../components/customComponents/table/type";

const Overview: React.FC = () => {
  // eslint-disable-next-line
  const data = (useLoaderData() as TableRowData[]) || [];
  const [tableData, setTableData] = useState<TableRowData[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");

  useEffect(() => {
    data.sort((a: TableRowData, b: TableRowData) =>
      a.name.localeCompare(b.name)
    );
    setTableData(data);
  }, [data]);

  useEffect(() => {
    if (searchKeyWord.trim() !== "")
      setTableData(
        data.filter((row: TableRowData) =>
          row?.name.toLowerCase().includes(searchKeyWord.trim().toLowerCase())
        )
      );
    else setTableData(data);
    // eslint-disable-next-line
  }, [searchKeyWord, setTableData]);

  return (
    <div className="w-[910px] my-20 mx-auto">
      <h1 className="text-4xl	font-bold mb-2">Contractors</h1>
      <h5 className="text-sm text-[#A3A3A3]">
        Lorem ipsum dolor sit amet consectetur. Lacus semper convallis non et
        vel nec sit proin.
      </h5>
      <br />
      <br />
      <div className="shadow-2xl">
        <div className="p-6 w-full flex">
          <div className="w-[750px]">
            <div className="relative mr-2 h-12">
              <span className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400">
                <MagnifyingGlassIcon />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-2 py-2 bg-[#F9F9F8] border-0 outline-0 rounded-md w-full h-12"
                value={searchKeyWord}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchKeyWord(e.target.value)
                }
              />
            </div>
          </div>
          <div className="w-[160px]">
            <button className="h-12 px-4 bg-[#F9F9F8] rounded-md hover:bg-gray-200 float-right">
              <div className="flex">
                Filters&nbsp;&nbsp;
                <MixerVerticalIcon className="h-6" />
              </div>
            </button>
          </div>
        </div>
        <div className="w-full">
          <Table
            tableData={tableData}
            selectedRowKeys={selectedRowKeys}
            setSelectedRowKeys={setSelectedRowKeys}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
