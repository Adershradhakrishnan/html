
function Display({data}) {
    console.log("Display component rendering...")
    return(
        <>
        <p>Name:{data.name}</p>
        <p>Email:{data.email}</p>
        </>
    )
}
export default Display;