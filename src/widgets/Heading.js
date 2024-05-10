import React from "react";

function Heading (props) {
    return (
        <h1 className="mt-10 text-center text-2xl font-bold text-gray-900">
            {props.textContent}
        </h1>
    )
}

export default Heading;