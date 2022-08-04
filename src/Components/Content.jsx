import React from 'react';

const Content = (props) => {
    return (
        <div>
            <h1>{props.heading}</h1>
            <h3>{props.heading3}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default Content;
