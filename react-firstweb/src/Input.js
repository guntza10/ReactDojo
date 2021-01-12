import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Input({ addPost }) {
    const [input, setInput] = useState('');

    function onChange(event) {
        setInput(event.target.value)
    }

    return (
        <div className="Input">
            <div className="Input_header">Create Post</div>
            <input className="Input_field"
                type="text"
                value={input} />
        </div>
    );
}

Input.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default Input;