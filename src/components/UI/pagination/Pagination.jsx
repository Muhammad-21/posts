import React from 'react'
import {getPagesArray} from '../../../utils/pages';



export default function pagination({totalPages, changePage, page}) {
  let pagesArray = getPagesArray(totalPages);
    return (
        <div className="page__wrapper">
        {pagesArray.map(p => 
          <span
            onClick={() => changePage(p)} 
            key={p}  
            className={page === p ? 'page page__current':'page'}
          >
            {p}
          </span>
        )}
      </div>
    )
}
