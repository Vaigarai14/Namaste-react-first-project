import { useRouteError } from "react-router"


const Errorpage = (() => {
    const err = useRouteError()
    let { data, status, statusText } = err
    console.log(err);
    return (
        <div>
            <h1>This is error page of the site ⚠⚠⚠</h1>
            <h2>{data} ⚠</h2>
            <p>{status}: {statusText} </p>
        </div>
    )
})


export default Errorpage