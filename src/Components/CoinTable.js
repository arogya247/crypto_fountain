import React, {useMemo} from 'react';
import { Column, useFlexLayout, useSortBy, useTable, useGlobalFilter, usePagination } from 'react-table';
import { Td, Tr, Th, Table, Tbody, Thead } from '@chakra-ui/table'
import { chakra } from '@chakra-ui/system'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'
import { Search } from './Search';
import './CoinTable.css'
import { Pagination } from './Pagination';

export const CoinTable = ({tableData, tableColumns}) => {

  const data = useMemo(() => tableData, [tableData])

  const columns = useMemo(() => tableColumns, [tableColumns])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({ columns, data}, useGlobalFilter, useSortBy, usePagination, useFlexLayout)

  const { pageIndex, globalFilter } = state

  const WrappedTableRow = styled(Tr)`
    td {
      :last-child {
        border-right: 2px solid #1c243c;
      }
      :first-of-type {
        border-left: 2px solid #1c243c;
      }
    }
  `

  const WrappedTableData = styled(Td)`
    border: 1px solid #1c243c;
    text-align: center;
    padding: 1em;
    font-weight: 500;
  `

  return (
    <>
    <Search filter={globalFilter} setFilter={setGlobalFilter} />
    <Table {...getTableProps()} marginTop='3em'>
      <Thead>
        {headerGroups.map(headerGroup => {
          return <Tr {...headerGroup.getHeaderGroupProps()} marginBottom='1.5em'>
            {headerGroup.headers.map((column) => {
              const shouldSortingArrowShow = column.canSort
              const triangleComponent = column.isSortedDesc ?
                (<TriangleDownIcon aria-label='sorted descending' marginLeft='.2em' />)
                : (<TriangleUpIcon aria-label='sorted ascending' marginLeft='.2em' />)
              return <Th {...column.getHeaderProps(column.getSortByToggleProps())} color="white" backgroundColor="#00ccc2" fontSize='1.2em' textAlign='center' padding='1em 0' border='none'>
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
        {page.map(row => {
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
    <Pagination pageIndex={pageIndex} pageOptions={pageOptions} gotoPage={gotoPage} 
                nextPage={nextPage} previousPage={previousPage} canNextPage={canNextPage}
                canPreviousPage={canPreviousPage}
    />
    </>
  )
}
