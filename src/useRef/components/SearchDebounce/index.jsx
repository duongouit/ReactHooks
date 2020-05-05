import React,{useState,useRef} from 'react';
import PropTypes from 'prop-types';
import { useClock } from '../../../hooks/useClock';
SearchDebounce.propTypes = {
    onSubmit: PropTypes.func,
};
SearchDebounce.defaultProps = {
    onSubmit: null,
}
function SearchDebounce(props) {
    const {onSubmit} = props;
    const typingTimeoutRef = useRef(null)
    function handleSearchChange(e){
        const value = e.target.value;
        if(!onSubmit) return;
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            onSubmit(value);
        }, 400);    
    }
    return (
        <div>
            <input onChange={handleSearchChange}/>
        </div>
    )
}
export default SearchDebounce;

