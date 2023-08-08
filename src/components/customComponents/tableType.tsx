import React from "react";

export type TableRowData = {
  availability: boolean;
  key: number;
  name: string;
  rate: number;
  specialties: string[];
};

export type Column = {
  dataIndex: string;
  title: string;
  sorter?: (a: TableRowData, b: TableRowData) => number;
  render?: (
    col: any,
    row: TableRowData,
    isSelected: boolean
  ) => React.ReactNode;
};
