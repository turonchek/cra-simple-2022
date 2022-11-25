import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

export function Pagination(props){
    const {handlePageClick, pageCount} = props;
    return (
        <ReactPaginate
            previousLabel={`<<`}
            nextLabel={`>>`}
            breakLabel={`...`}
            pageCount={pageCount}
            // marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={`pagination justify-content-center`}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={`active`}
            // forcePage={currentPage-1}
        />
    )
}

Pagination.propTypes = {
    handlePageClick:PropTypes.func.isRequired,
    pageCount:PropTypes.number.isRequired,
}