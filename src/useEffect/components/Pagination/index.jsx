import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './pagination.css';

Pagingnation.propTypes = {

};

function Pagingnation(props) {
    const { pagination, onPageChange } = props;
    const [firstPage, setFirstPage] = useState(1);
    const { _page, _limit, _visiblePages, _totalRows } = pagination;
    const [lastPage, setLastPage] = useState(_visiblePages);
    const totalPages = Math.ceil(_totalRows / _limit);
    function handlePageChange(newPage) {
        onPageChange(newPage);
    }
    const visiblePage = () => {
        var table = [];
        if (lastPage === _page && _page < totalPages) {
            setFirstPage(firstPage + 1);
            setLastPage(lastPage + 1);
        } else if (firstPage === _page && _page > 1) {
            setFirstPage(firstPage - 1);
            setLastPage(lastPage - 1);
        }
        for (let i = firstPage; i <= lastPage; i++) {
            table.push(<button className={classNames('page-item', { 'active': _page === i })} onClick={() => handlePageChange(i)} key={i}>{i}</button>)
        }
        return table;
    }
    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "20%", fontSize: "0.6em" }}>
                <span>Page {_page}</span>
            </div>
            <div style={{ width: "80%" }}>
                <button onClick={() => handlePageChange(1)}>First</button>
                <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>«</button>
                {visiblePage()}
                <button disabled={_page >= totalPages} onClick={() => handlePageChange(_page + 1)}>»</button>
                <button onClick={() => handlePageChange(totalPages)}>Last</button>
                <div style={{fontSize:"0.5em"}}>
                    1 - 20 trong số {_totalRows} danh sách
                </div>
            </div>
        </div>
    );
}

export default Pagingnation;