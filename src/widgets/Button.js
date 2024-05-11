import React from "react";

function Button (props) {
    return (
        <button type={props.type} onClick={props.callBack}
            className="flex w-full justify-center rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {props.textContent || props.children}
        </button>
    )
}

export default Button;