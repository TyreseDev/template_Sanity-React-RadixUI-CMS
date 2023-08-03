import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import TableComponent from "../../components/customComponents/table";
import TooltipComponent from "../../components/customComponents/tooltip";
import { TableRowData } from "../../components/customComponents/table/type";

const Overview: React.FC = () => {
  // eslint-disable-next-line
  const data = (useLoaderData() as TableRowData[]) || [];
  const [tableData, setTableData] = useState<TableRowData[]>([]);
  const [sortedTableData, setSortedTableData] = useState<TableRowData[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");
  const [sortSelect, setSortSelect] = useState<
    [string, string, (a: any, b: any) => number]
  >(["none", "none", () => 1]);

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
    // eslint-disable-next-line
  }, [searchKeyWord, setTableData]);

  useEffect(() => {
    if (sortSelect[1] === "ascending") {
      const tmpTableData = [...sortedTableData];
      tmpTableData.sort(sortSelect[2]);
      setTableData(tmpTableData);
    } else if (sortSelect[1] === "descending") {
      const tmpTableData = [...sortedTableData];
      tmpTableData.sort((a: TableRowData, b: TableRowData) =>
        sortSelect[2](b, a)
      );
      setSortedTableData(tmpTableData);
    } else setSortedTableData(tableData);
    // eslint-disable-next-line
  }, [sortSelect, tableData]);

  const onSelectChange = (newSelectedRowKeys: number[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const getColor = {
    A: "bg-[#0000ff]",
    B: "bg-[#893E3E]",
    C: "bg-[#0000ff]",
    D: "bg-[#0000ff]",
    E: "bg-[#0000ff]",
    F: "bg-[#0000ff]",
    G: "bg-[#0000ff]",
    H: "bg-[#0000ff]",
    I: "bg-[#0000ff]",
    J: "bg-[#0000ff]",
    K: "bg-[#0000ff]",
    L: "bg-[#0000ff]",
    M: "bg-[#0000ff]",
    N: "bg-[#0000ff]",
    O: "bg-[#0000ff]",
    P: "bg-[#0000ff]",
    Q: "bg-[#0000ff]",
    R: "bg-[#3E4589]",
    S: "bg-[#3F893E]",
    T: "bg-[#883E89]",
    U: "bg-[#0000ff]",
    V: "bg-[#0000ff]",
    W: "bg-[#0000ff]",
    X: "bg-[#0000ff]",
    Y: "bg-[#89863E]",
    Z: "bg-[#0000ff]",
  };

  const columns = [
    {
      title: "FULL NAME",
      dataIndex: "name",
      sorter: {
        compare: (a: TableRowData, b: TableRowData) =>
          a.name.localeCompare(b.name),
      },
      render: (a: string) => (
        <div>
          <button
            className={`w-6 h-6 mr-1 rounded-lg text-white ${getColor[a[0]]}`}
          >
            {a[0]}
          </button>
          <span className="text-[#1B1B18]">{a}</span>
        </div>
      ),
    },
    {
      title: "SPECIALTIES",
      dataIndex: "specialties",
      sorter: {
        compare: (a: TableRowData, b: TableRowData) =>
          b.specialties?.length - a.specialties?.length,
      },
      render: (a: { specialty: string }[], b: Object, c: boolean) => (
        <div>
          {a?.length > 0 && (
            <span
              className={`p-1.5 rounded-[5px] cursor-pointer ${
                c ? "bg-[#4e8fee]" : "bg-[#f3f3f3] text-[#5E5E5E]"
              }`}
            >
              {a[0].specialty}
            </span>
          )}
          {a?.length > 1 && (
            <span
              className={`p-1.5 ml-2 rounded-[5px] cursor-pointer ${
                c ? "bg-[#4e8fee]" : "bg-[#f3f3f3] text-[#5E5E5E]"
              }`}
            >
              {a[1].specialty}
            </span>
          )}
          {a?.length > 2 && (
            <TooltipComponent
              content={a?.slice(2).map((tag: { specialty: string }) => (
                <span
                  className="bg-[#f3f3f3] text-[#5E5E5E] p-1.5 mx-1 rounded-[5px] cursor-pointer"
                  key={tag.specialty}
                >
                  {tag.specialty}
                </span>
              ))}
              triggerButton={
                <span
                  className={`p-1.5 ml-2 rounded-[5px] cursor-pointer ${
                    c ? "bg-[#4e8fee]" : "bg-[#f3f3f3] text-[#5E5E5E]"
                  }`}
                >
                  {a.length - 2}+
                </span>
              }
            />
          )}
        </div>
      ),
    },
    {
      title: "DAY RATE",
      dataIndex: "rate",
      sorter: {
        compare: (a: TableRowData, b: TableRowData) => b.rate - a.rate,
      },
      render: (a: number) => (
        <span className="text-[#1B1B18]">
          ${" "}
          {a.toLocaleString(["nl"], {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      ),
    },
    {
      title: "AVAILABILITY",
      dataIndex: "availability",
      sorter: {
        compare: (a: TableRowData, b: TableRowData) =>
          b.availability.toString().localeCompare(a.availability.toString()),
      },
      render: (a: boolean) => (
        <span className="text-[#1B1B18]">{a ? "Yes" : "No"}</span>
      ),
    },
  ];

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
