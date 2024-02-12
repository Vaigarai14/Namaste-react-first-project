import { useState } from "react";

const Aboutpage = ((props) => {

    let [count] = useState(0)

    return (
        <div>
            <h1>This is About Page .....🙊</h1>
            <p>{props.name}</p>
            <p>{props.location}</p>
            <p>Count: {count}</p>
        </div>
    )
})
export default Aboutpage;