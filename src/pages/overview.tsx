import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import TableComponent from "../components/customComponents/table";
import { TableRowData } from "../components/customComponents/tableType";
import columns from "../components/overview/columns";

const Overview: React.FC = () => {
  const data = useLoaderData() as TableRowData[];
  const [tableData, setTableData] = useState<TableRowData[]>([]);
  const [sortedTableData, setSortedTableData] = useState<TableRowData[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");
  const [sortSelect, setSortSelect] = useState<{
    sortKey: string;
    sortDirection: string;
    sorter: (a: any, b: any) => number;
  }>({
    sortKey: "none",
    sortDirection: "none",
    sorter: () => 1,
  });

  useEffect(() => {
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
  }, [searchKeyWord, data]);

  useEffect(() => {
    if (sortSelect["sortDirection"] === "ascending") {
      const tmpTableData = [...tableData];
      tmpTableData.sort(sortSelect["sorter"]);
      setSortedTableData(tmpTableData);
    } else if (sortSelect["sortDirection"] === "descending") {
      const tmpTableData = [...tableData];
      tmpTableData.sort((a: TableRowData, b: TableRowData) =>
        sortSelect["sorter"](b, a)
      );
      setSortedTableData(tmpTableData);
    } else setSortedTableData(tableData);
  }, [sortSelect, tableData]);

  const onSelectChange = (newSelectedRowKeys: number[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  return (
    <div className="w-[910px] my-20 mx-auto bg-white">
      <h1 className="text-[40px] font-semibold text-[#1B1B18]">Contractors</h1>
      <h5 className="text-[#A3A3A3] mb-12">
        Lorem ipsum dolor sit amet consectetur. Lacus semper convallis non et
        vel nec sit proin.
      </h5>
      <div className="rounded-lg shadow-[0px_49px_100px_0px_#0000001A]">
        <div className="p-6 w-full flex">
          <div className="w-[790px]">
            <div className="relative mr-2 h-12">
              <span className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400">
                <MagnifyingGlassIcon />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 py-2 bg-[#F9F9F8] border-0 outline-0 rounded-lg w-full h-12"
                value={searchKeyWord}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchKeyWord(e.target.value)
                }
              />
            </div>
          </div>
          <div className="w-[120px]">
            <button className="h-12 px-5 bg-[#F9F9F8] rounded-lg hover:bg-gray-200 float-right">
              <div className="flex text-[#706F6C]">
                Filters&nbsp;&nbsp;
                <img src="/assets/img/filter.svg" alt="filter" />
              </div>
            </button>
          </div>
        </div>
        <div className="w-full">
          <TableComponent
            selectedRowKeys={selectedRowKeys}
            onSelectChange={onSelectChange}
            columns={columns}
            dataSource={sortedTableData}
            setSortSelect={setSortSelect}
            sortSelect={sortSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
