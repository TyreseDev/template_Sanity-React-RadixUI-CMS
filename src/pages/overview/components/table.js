import { Popover, Table, Tag } from "antd";
import "./table.css";

const TableComponent = ({ data, selectedRowKeys, setSelectedRowKeys }) => {
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "FULL NAME",
      dataIndex: "name",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
      },
    },
    {
      title: "SPECIALTIES",
      dataIndex: "specialties",
      sorter: {
        compare: (a, b) => b.specialties?.length - a.specialties?.length,
      },
      render: (a, b) => (
        <div>
          {a?.length > 0 && <Tag>{a[0].specialty}</Tag>}
          {a?.length > 1 && <Tag>{a[1].specialty}</Tag>}
          {a?.length > 2 && (
            <Popover
              content={a?.slice(2).map((tag) => (
                <Tag
                  className={
                    selectedRowKeys.includes(b.key)
                      ? "selected-row-popover"
                      : "unselected-row-popover"
                  }
                  key={tag}
                >
                  {tag.specialty}
                </Tag>
              ))}
            >
              <Tag>{a.length - 2}+</Tag>
            </Popover>
          )}
        </div>
      ),
    },
    {
      title: "DAY RATE",
      dataIndex: "rate",
      sorter: {
        compare: (a, b) => b.rate - a.rate,
      },
      render: (a) =>
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
        compare: (a, b) =>
          b.availability.toString().localeCompare(a.availability.toString()),
      },
      render: (a) => (a ? "Yes" : "No"),
    },
  ];

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 5,
        hideOnSinglePage: true,
        showLessItems: true,
      }}
      className="main-table"
    />
  );
};

export default TableComponent;
