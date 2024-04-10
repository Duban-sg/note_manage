import React from 'react';
function Notesearch({searchValue,setSearchValue}) {

  return (
    <input
      placeholder="Buscar"
      className='Search'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { Notesearch };