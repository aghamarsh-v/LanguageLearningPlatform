import React from "react";

function TextBox (props) {
    return (
      <div>
        <input type={props.type} placeholder={props.placeholder} /> <br />
      </div>
    );
}

export default TextBox;
