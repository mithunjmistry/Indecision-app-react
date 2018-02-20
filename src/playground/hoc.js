// higher order components
// a component that renders other components

// reuse code
// abstract state
// prop manipulation
// render hijacking

import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('app');
const Template = (props) => (
    <div>
        <p>Hello</p>
        <p>These are some details: {props.info}</p>
    </div>
);

const withAuthenticationCheck = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent/> : <p>You are not authenticated.</p>}
        </div>
    )
};

const AuthInfo = withAuthenticationCheck(Template);

ReactDOM.render(<AuthInfo isAuthenticated={false} info={'Hey'}/>, root);