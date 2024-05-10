import React from "react";

function EditFieldLabel (props) {
    return (
        <label htmlFor={props.type} className="bold text-sm font-medium text-gray-900">
            {props.textContent}
        </label>
    )
}

export default EditFieldLabel;