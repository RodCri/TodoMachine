/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './Filter.css'

export const Filter = ({searchValue, setSearchValue}) => {
  
  return (
    <>
      {/* <label htmlFor="Search" className="filter__label">Search Task</label> */}
      <input type="text" name="search" value={searchValue} onChange={(event) =>{
        setSearchValue(event.target.value);
      }} placeholder="...Search" className="filter__input" />
    </>
  )
}
