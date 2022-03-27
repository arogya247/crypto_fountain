import React from 'react'
import './Pagination.css'

export const Pagination = (props) => {

  const {pageIndex, pageOptions, pageCount, gotoPage, canNextPage, canPreviousPage, nextPage, previousPage} = props

  return (
    <div className="pagination">
      <span className='pagination-span'>
        Page: {' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </span>
      <span className='pagination-span'>
        Go to Page: {' '}
        <input type="number" defaultValue={pageIndex+1} className='pagination-input'
        onChange={e => {
          const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
          gotoPage(pageNumber)
        }} />
      </span>
      <div style={{display: 'flex', justifyContent: 'center', borderRadius: '10px', gap: '.5em'}}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} >{'<<'}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>Prev</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage} >{'>>'}</button>
      </div>
    </div>
  )
}
