import React from "react";

function Display({data}) {
    console.log("Display component rendering...")
    return(
        <>
        <p>Data:{data}</p>
        </>
    )
}
export default Display;