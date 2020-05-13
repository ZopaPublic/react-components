import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 14px;
  table-layout: auto;
  th {
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    white-space: nowrap;
    text-transform: unset;
    background-color: ghostwhite;
    border: 1px solid ghostwhite;
    padding: 10px;
  }
  td {
    vertical-align: top;
    font-size: 12px;
    border: 1px solid ghostwhite;
    padding: 10px;
    &:last-child {
      padding-right: 0;
    }
    & p:last-child {
      margin-bottom: 0;
    }
  }
`;

export function TableRenderer({ columns, rows, getRowKey }) {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map(({ caption }) => (
            <th key={caption}>{caption}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={getRowKey(row)}>
            {columns.map(({ render }, index) => (
              <td key={index}>{render(row)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableRenderer;
