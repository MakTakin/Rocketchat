import React from 'react'
import {Ul, Li, A} from '../../styled/styled'
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Ul>
        {pageNumbers.map(number =>
          <Li key={number}>
            <A onClick={() => paginate(number)} href='#'>
               {number}
            </A>
          </Li>)
        }
      </Ul>
    </nav>
  )
}

export default Pagination;