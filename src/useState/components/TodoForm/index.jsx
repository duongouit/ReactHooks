import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null,
}
function TodoForm({onSubmit}) {
    const [value,setValue] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        if(!onSubmit || !value) return;
        const formValues = {
            title: value,
        }
        onSubmit(formValues);
        setValue('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default TodoForm;