import React from 'react'
import './Search.css'

export const Search = ({filter, setFilter}) => {

  return (
    <span style={{display: 'flex', gap: '10px', backgroundColor: 'none'}}>
      <div className='search-label'>
        Search {' '}
      </div>
      <input className='search-input' value={filter || ''} placeholder="Enter a keyword..."
      onChange={e => setFilter(e.target.value)}
      />
    </span>
  )
}
