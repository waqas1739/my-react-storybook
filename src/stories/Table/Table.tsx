import React from 'react';
import styled from 'styled-components';

export interface TableProps {
  columns: string[];
  data: Record<string, string>[];
}

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeaderCell = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <TableContainer>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell key={column}>{column}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column}>{row[column]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default Table;
