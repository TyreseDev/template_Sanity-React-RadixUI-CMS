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
  sorter?: {
    compare: (a: TableRowData, b: TableRowData) => number;
  };
  render?: (a: any, b: TableRowData, c: boolean) => React.ReactNode;
};
