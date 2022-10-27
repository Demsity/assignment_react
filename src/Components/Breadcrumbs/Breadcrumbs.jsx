import React from 'react'
import { NavLink } from 'react-router-dom';

function Breadcrumbs({ page, prevPage }) {
  return (
    <div className='container __breadcrumbs'>
        <NavLink className={"__BC-index"} to={"/"}>HOME</NavLink>
        <div className='ms-3 me-3'><i className="fa-regular fa-arrow-right"></i></div>
        {
          prevPage != undefined ? (
            <>
            <NavLink className={"__BC-index"} to={`/${prevPage.toLowerCase()}`}>{prevPage.toUpperCase()}</NavLink>
            <div className='ms-3 me-3'><i className="fa-regular fa-arrow-right"></i></div>
            </>
          ):(
            null
          ) 
        }
        <NavLink className={"__BC-index __active"} to={`/${page.toLowerCase()}`}>{page.toUpperCase()}</NavLink>
    </div>
  )
  
}

export default Breadcrumbs