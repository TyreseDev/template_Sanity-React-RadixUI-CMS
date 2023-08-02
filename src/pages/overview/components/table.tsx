import React, { useState, useEffect } from "react";
import TableComponent from "../../../components/customComponents/table";
import TooltipComponent from "../../../components/customComponents/tooptip";
import { TableRowData } from "../../../components/customComponents/table/type";

export type TableProps = {
  tableData: TableRowData[];
  selectedRowKeys: number[];
  setSelectedRowKeys: React.Dispatch<React.SetStateAction<number[]>>;
};

const Table: React.FC<TableProps> = ({
  tableData: dataSource,
  selectedRowKeys,
  setSelectedRowKeys,
}) => {
  const [tableData, setTableData] = useState<TableRowData[]>([]);

  const [sortSelect, setSortSelect] = useState<
    [string, string, (a: any, b: any) => number]
  >(["none", "none", () => 1]);

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

  useEffect(() => {
    if (sortSelect[1] === "ascending") {
      const tmpTableData = [...tableData];
      tmpTableData.sort(sortSelect[2]);
      setTableData(tmpTableData);
    } else if (sortSelect[1] === "descending") {
      const tmpTableData = [...tableData];
      tmpTableData.sort((a: TableRowData, b: TableRowData) =>
        sortSelect[2](b, a)
      );
      setTableData(tmpTableData);
    } else setTableData(dataSource);
    // eslint-disable-next-line
  }, [sortSelect, dataSource]);

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
            className={`w-6 h-6 mr-1 rounded-md text-white ${getColor[a[0]]}`}
          >
            {a[0]}
          </button>
          <span>{a}</span>
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
              className={`p-1 rounded-md text-sm cursor-pointer ${
                c ? "bg-[#4e8fee]" : "bg-[#f3f3f3]"
              }`}
            >
              {a[0].specialty}
            </span>
          )}
          {a?.length > 1 && (
            <span
              className={`p-1 ml-2 rounded-md text-sm cursor-pointer ${
                c ? "bg-[#4e8fee]" : "bg-[#f3f3f3]"
              }`}
            >
              {a[1].specialty}
            </span>
          )}
          {a?.length > 2 && (
            <TooltipComponent
              content={a?.slice(2).map((tag: { specialty: string }) => (
                <span
                  className="bg-[#f3f3f3] p-1 m-1 rounded-md text-sm cursor-pointer"
                  key={tag.specialty}
                >
                  {tag.specialty}
                </span>
              ))}
              triggerButton={
                <span
                  className={`p-1 ml-2 rounded-md text-sm cursor-pointer ${
                    c ? "bg-[#4e8fee]" : "bg-[#f3f3f3]"
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
      render: (a: number) =>
        "$ " +
        a.toLocaleString(["nl"], {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
    },
    {
      title: "AVAILABILITY",
      dataIndex: "availability",
      sorter: {
        compare: (a: TableRowData, b: TableRowData) =>
          b.availability.toString().localeCompare(a.availability.toString()),
      },
      render: (a: boolean) => (a ? "Yes" : "No"),
    },
  ];

  return (
    <TableComponent
      selectedRowKeys={selectedRowKeys}
      onSelectChange={onSelectChange}
      columns={columns}
      dataSource={tableData}
      setSortSelect={setSortSelect}
      sortSelect={sortSelect}
    />
  );
};

export default Table;
