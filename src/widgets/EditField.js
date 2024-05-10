import React from "react";

function EditField (props) {
    return (
        <input
            id={props.id || props.type}
            name={props.type}
            type={props.type}
            autoComplete={props.auto || props.type}
            required
            className="block w-full rounded-md border-0 mt-2 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        />
    )
}

export default EditField;