import React from 'react'
import {Ul, Li, A} from '../../styled/styled'
const Pagination = ({ postsPerPage, totalPosts, paginate,currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Ul>
        {pageNumbers.map(number =>
          <Li key={number}  active={number === currentPage}>
            <A onClick={() => paginate(number)} href='#' active={number === currentPage}>
               {number}
            </A>
          </Li>)
        }
      </Ul>
    </nav>
  )
}

export default Pagination;