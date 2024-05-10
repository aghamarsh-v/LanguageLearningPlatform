import React from "react";

function LangSelectionButton (props) {
    return (
        <button onClick={ () => {props.cb(props.langName)}} className="space-y-2 flex flex-col max-w-fit max-h-fit">
            <div className="p-2 max-w-fit max-h-fit bg-white rounded-xl shadow-lg ">
                <div className="min-w-9 min-h-9 boarder-solid border-gray-600">
                    <img src={"https://flagsapi.com/"+props.country+"/flat/64.png"} />
                </div>
            </div>

            <div className="m-auto justify-center">
                <p>{props.langName}</p>
            </div>
        </button>
    )
}

export default LangSelectionButton;