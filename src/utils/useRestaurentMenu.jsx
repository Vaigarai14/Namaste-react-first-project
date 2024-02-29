import { useEffect, useState } from "react"
import { RESTAURANTGROUPCARD, RESTAURANTHOMECARD } from "./constants";



const useRestaurentMenu = (id) => {

    const [restmenu, setrestmenu] = useState(null);
    const [dropdowncard, setdropdowncard] = useState(null)

    let [orignallist, setorignallist] = useState([]);


    useEffect(() => {
        fetchdata();
        fetchrestaurcard();
    }, [])


    const fetchdata = async () => {
        let data = await fetch(RESTAURANTGROUPCARD
            + id)
        let restdata = await data.json();
        setrestmenu(restdata)
        setdropdowncard(restdata)
    };

    const fetchrestaurcard = async () => {
        const data = await fetch(RESTAURANTHOMECARD)
        const jsondata = await data.json()
        let Restaurentdatas = jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setorignallist(Restaurentdatas)
    }

    return { restmenu, dropdowncard, orignallist }
};




export default useRestaurentMenu;