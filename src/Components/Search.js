import React from 'react'

export const Search = ({filter, setFilter}) => {


  return (
    <span style={{display: 'flex', gap: '10px'}}>
      <div 
      style={{color: 'white', padding: '.5em', 
              backgroundColor: '#00ccc2', borderRadius: '5px'}}>
        Search {' '}
      </div>
      <input value={filter || ''}
      onChange={e => setFilter(e.target.value)}
      />
    </span>
  )
}
