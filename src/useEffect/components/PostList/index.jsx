import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Pagingnation from '../Pagination';
import axios from 'axios';
import queryString from 'query-string';
PostList.propTypes = {
    handlePageChange: PropTypes.func,
};
PostList.defaultProps = {
    handlePageChange: null,
}

function PostList(props) {
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _visiblePages: 4,
        _totalRows: 1
    })
    const [filters,setFilters] = useState({
        _page: 1,
        _limit: 10,
    })
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getPostList() {
            const paramsString = queryString.stringify(filters);
            await axios.get(`http://js-post-api.herokuapp.com/api/posts?${paramsString}`)
                .then(res => {
                    setData(res.data.data);
                    setPagination(res.data.pagination);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getPostList();
    }, [filters])
    function handlePageChange(newPage) {
        setFilters({...filters,_page:newPage})
    }
    return (
        <div>
            <ul style={{textAlign:"left"}}>
                {data.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
            <Pagingnation pagination={pagination} onPageChange={handlePageChange} />
        </div>
    );
}

export default PostList;