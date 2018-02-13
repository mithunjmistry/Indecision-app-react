import React from 'react';

const Option = (props) => {
    return (
        <div>
            Option : {props.optionText}
            <button 
            onClick={(e) => {
                props.removeOption(props.optionText)   
            }}>
            remove
            </button>
        </div>
    );
}

export default Option;