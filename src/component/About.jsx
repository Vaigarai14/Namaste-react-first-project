import { useEffect, useState } from "react";
const About = (() => {

    let [user, setuser] = useState([])

    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        let data = await fetch('https://api.github.com/users/vaigarai14')
        let userdata = await data.json()
        console.log(userdata);
        setuser(userdata)
    }

    return (
        <div className="flex items-center mx-52 my-14">
            <img className="w-52 h-52 border-2 border-gray-400 rounded-md p-1 mx-4 m-3" src={user.avatar_url}></img>
            <div >
                <h1 className="text-4xl">{user.name}</h1>
                <p className="my-3 mx-1">{user.bio}</p>
            </div>
        </div>
    )
})



export default About;