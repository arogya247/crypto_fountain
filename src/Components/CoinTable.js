import React, {useMemo} from 'react';
import { Column, useFlexLayout, useSortBy, useTable } from 'react-table';
import { Td, Tr, Th, Table, Tbody, Thead } from '@chakra-ui/table'
import { chakra } from '@chakra-ui/system'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'

export const CoinTable = ({tableData, tableColumns}) => {

  const data = useMemo(() => tableData, [tableData])

  const columns = useMemo(() => tableColumns, [tableColumns])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data}, useSortBy, useFlexLayout)

  const WrappedTableRow = styled(Tr)`
    td {
      :last-child {
        border-right: 2px solid black;
      }
    }
  `

  const WrappedTableData = styled(Td)`
    border: 1px solid black;
    text-align: center;
    padding: 1em;
  `

  return (
    <Table {...getTableProps()} variant='striped' colorScheme='teal' marginTop='3em'>
      <Thead>
        {headerGroups.map(headerGroup => {
          return <Tr {...headerGroup.getHeaderGroupProps()} marginBottom='1.5em'>
            {headerGroup.headers.map((column) => {
              const shouldSortingArrowShow = column.canSort
              const triangleComponent = column.isSortedDesc ?
                (<TriangleDownIcon aria-label='sorted descending' marginLeft='.2em' />)
                : (<TriangleUpIcon aria-label='sorted ascending' marginLeft='.2em' />)
              return <Th {...column.getHeaderProps(column.getSortByToggleProps())} color="white" backgroundColor="green" fontSize='1.2em' textAlign='center' padding='1em 0' border='none'>
                {column.render("Header")}
                <chakra.span>
                  {
                    shouldSortingArrowShow ? (
                      triangleComponent
                    ) : null
                  }
                </chakra.span>
              </Th>
            })}
          </Tr>
        })}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <WrappedTableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <WrappedTableData {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </WrappedTableData>
              })}
            </WrappedTableRow>
          )
        })}
      </Tbody>
    </Table>
  )
}
