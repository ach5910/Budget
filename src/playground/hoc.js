// Higher order component (HOC) - A component that renders another component
// Reuse Code
// Render Hijacking
// Prop manipulation
// Abstract State
import React from 'react';
import ReacDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin &&<p>This is private info please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Not Authenticated</p>}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReacDOM.render(<AuthInfo isAuthenticated={false} info='There are the details'/>, document.getElementById('app'));