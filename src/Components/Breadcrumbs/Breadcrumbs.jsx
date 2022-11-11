import React from 'react'
import { NavLink } from 'react-router-dom';

function Breadcrumbs({ page, prevPage }) {

  // check needed for render to work
  if (page === undefined) {
    return (<div>Something went wrong</div>)
  } else {
    return (
      <div className='container __breadcrumbs'>
          <NavLink className={"__BC-index"} to={"/"}>HOME</NavLink>
          <div className='ms-3 me-3'><i className="fa-regular fa-arrow-right"></i></div>
          {
            // if there are more sub pages, eg. home -> category -> dresses
            prevPage !== undefined ? (
              <>
              <NavLink className={"__BC-index"} to={`/${prevPage.toLowerCase()}`}>{prevPage.toUpperCase()}</NavLink>
              <div className='ms-3 me-3'><i className="fa-regular fa-arrow-right"></i></div>
              </>
            ):(
              null
            ) 
          }
          <span className={"__BC-index __active"}>{page.toUpperCase()}</span>
      </div>
    )
  }


  
}

export default Breadcrumbs