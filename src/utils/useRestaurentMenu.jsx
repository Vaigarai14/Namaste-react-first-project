import { useEffect, useState } from "react"
import { RESTAURANTGROUPCARD } from "./constants";



const useRestaurentMenu = (id) => {

    const [restmenu, setrestmenu] = useState(null);
    const [dropdowncard, setdropdowncard] = useState(null)


    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        let data = await fetch(RESTAURANTGROUPCARD
            + id)
        let restdata = await data.json();
        setrestmenu(restdata)
        setdropdowncard(restdata)
        console.log(restdata)

    };

    return { restmenu, dropdowncard }
};




export default useRestaurentMenu;