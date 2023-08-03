import React from "react";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { Column, TableRowData } from "./type";

type TableComponentProps = {
  selectedRowKeys: number[];
  onSelectChange: (selectedRowKeys: number[]) => void;
  setSortSelect: (
    sortSelect: [string, string, (a: any, b: any) => number]
  ) => void;
  sortSelect: [string, string, (a: any, b: any) => number];
  columns: Column[];
  dataSource: TableRowData[];
};

const TableComponent: React.FC<TableComponentProps> = ({
  selectedRowKeys,
  onSelectChange,
  setSortSelect,
  sortSelect,
  columns,
  dataSource,
}) => (
  <table className="w-full">
    <thead className="w-full">
      <tr>
        <th className="text-left px-2 py-4 w-2 pl-6">
          <input
            type="checkbox"
            checked={
              selectedRowKeys.length === dataSource.length &&
              selectedRowKeys.length !== 0
            }
            aria-checked={
              selectedRowKeys.length > 0 &&
              selectedRowKeys.length < dataSource.length
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.checked)
                onSelectChange(dataSource.map((row: TableRowData) => row.key));
              else if (!e.target.checked) onSelectChange([]);
            }}
          />
        </th>
        {columns.map((column: Column, columnId: number) => (
          <th
            key={column.dataIndex}
            className={`text-left px-2 py-4 ${
              columnId === columns.length - 1 && "pr-6"
            }`}
          >
            <p className="flex text-[10px] font-normal text-[#A3A3A3]">
              {column.title}
              {column.sorter && (
                <span
                  className="mx-2 cursor-pointer"
                  onClick={() => {
                    if (sortSelect[0] !== column.dataIndex)
                      setSortSelect([
                        column.dataIndex,
                        "ascending",
                        column.sorter.compare,
                      ]);
                    else if (sortSelect[1] === "ascending")
                      setSortSelect([
                        column.dataIndex,
                        "descending",
                        column.sorter.compare,
                      ]);
                    else if (sortSelect[1] === "descending")
                      setSortSelect(["none", "none", () => 1]);
                  }}
                >
                  <TriangleUpIcon
                    className={`mt-[-2.5px] w-3 text-[#A3A3A3] hover:opacity-80 ${
                      sortSelect[0] === column.dataIndex &&
                      sortSelect[1] === "ascending"
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                  />
                  <TriangleDownIcon
                    className={`mt-[-10px] w-3 text-[#A3A3A3] hover:opacity-80 ${
                      sortSelect[0] === column.dataIndex &&
                      sortSelect[1] === "descending"
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                  />
                </span>
              )}
            </p>
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="w-full">
      {dataSource.map((row: TableRowData) => (
        <tr
          key={row.key}
          className={`${
            selectedRowKeys?.includes(row.key)
              ? "bg-[#377FE9] hover:opacity-90 text-white"
              : "hover:bg-[#F9F9F8]"
          }`}
        >
          <td className="text-left px-2 py-4 pl-6">
            <input
              type="checkbox"
              checked={selectedRowKeys.includes(row.key)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.checked)
                  onSelectChange([...selectedRowKeys, row.key]);
                else if (!e.target.checked)
                  onSelectChange(
                    selectedRowKeys.filter((key: number) => key !== row.key)
                  );
              }}
            />
          </td>
          {columns.map((column: Column, columnId: number) => (
            <td
              className={`text-left px-2 py-4 ${
                columnId === columns.length - 1 ? "pr-6 " : " "
              }`}
              key={row.key + "-" + column.dataIndex}
            >
              {column.render
                ? column.render(
                    row[column.dataIndex],
                    row,
                    selectedRowKeys?.includes(row.key)
                  )
                : row[column.dataIndex]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default TableComponent;
