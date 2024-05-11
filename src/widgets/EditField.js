import React from "react";

function EditField (props) {
    return (
        <input
            id={props.id || props.type}
            name={props.type}
            type={props.type}
            autoComplete={props.auto || props.type}
            required
            onChange={props.changeCallBack}
            className={`block w-full rounded-md mt-2 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm outline-none ${props.validateCss}`}
        />
    )
}

export default EditField;