import * as React from 'react';
import { StandardProps, RowDataType } from './common';

export interface CellProps extends StandardProps {
  align?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  className?: string;
  classPrefix?: string;
  dataKey?: string;
  isHeaderCell?: boolean;

  width?: number;
  height?: number | ((rowData: object) => number);
  left?: number;
  headerHeight?: number;

  style?: React.CSSProperties;
  firstColumn?: boolean;
  lastColumn?: boolean;
  hasChildren?: boolean;
  children?: React.ReactNode | ((rowData: RowDataType, rowIndex: number) => React.ReactNode);

  rowKey?: string | number;
  rowIndex?: number;
  rowSpan?: number;
  rowData?: RowDataType;
  depth?: number; // change `Cell` width and depth prop to optional

  onTreeToggle?: (
    rowKey?: string | number,
    rowIndex?: number,
    rowData?: RowDataType,
    event?: React.MouseEvent
  ) => void;

  renderTreeToggle?: (
    expandButton: React.ReactNode,
    rowData?: RowDataType,
    expanded?: boolean
  ) => React.ReactNode;
  renderCell?: (contentChildren: any) => React.ReactNode;
  wordWrap?: boolean;
  hidden?: boolean;
  treeCol?: boolean;
  expanded?: boolean;
  isDragging?: boolean;
}

declare const Cell: React.ComponentType<CellProps>;

export default Cell;
