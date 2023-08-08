import TooltipComponent from "../customComponents/tooltip";
import { TableRowData } from "../customComponents/tableType";
import getColor from "./getColor";

const columns = [
  {
    title: "FULL NAME",
    dataIndex: "name",
    sorter: (a: TableRowData, b: TableRowData) => a.name.localeCompare(b.name),
    render: (col: string) => (
      <div>
        <button
          className={`w-6 h-6 mr-1 rounded-lg text-white ${getColor[col[0]]}`}
        >
          {col[0]}
        </button>
        <span>{col}</span>
      </div>
    ),
  },
  {
    title: "SPECIALTIES",
    dataIndex: "specialties",
    sorter: (a: TableRowData, b: TableRowData) =>
      b.specialties?.length - a.specialties?.length,
    render: (
      col: { specialty: string }[],
      row: TableRowData,
      isSelected: boolean
    ) => (
      <div>
        {col?.length > 0 && (
          <span
            className={`p-1.5 rounded-[5px] cursor-pointer ${
              isSelected ? "bg-[#4e8fee]" : "bg-[#f3f3f3] text-[#5E5E5E]"
            }`}
          >
            {col[0].specialty}
          </span>
        )}
        {col?.length > 1 && (
          <span
            className={`p-1.5 ml-2 rounded-[5px] cursor-pointer ${
              isSelected ? "bg-[#4e8fee]" : "bg-[#f3f3f3] text-[#5E5E5E]"
            }`}
          >
            {col[1].specialty}
          </span>
        )}
        {col?.length > 2 && (
          <TooltipComponent
            content={col?.slice(2).map((tag: { specialty: string }) => (
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
                  isSelected ? "bg-[#4e8fee]" : "bg-[#f3f3f3] text-[#5E5E5E]"
                }`}
              >
                {col.length - 2}+
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
    sorter: (a: TableRowData, b: TableRowData) => b.rate - a.rate,
    render: (col: number) => (
      <span>
        ${" "}
        {col.toLocaleString(["nl"], {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
    ),
  },
  {
    title: "AVAILABILITY",
    dataIndex: "availability",
    sorter: (a: TableRowData, b: TableRowData) =>
      b.availability.toString().localeCompare(a.availability.toString()),
    render: (col: boolean) => <span>{col ? "Yes" : "No"}</span>,
  },
];

export default columns;
