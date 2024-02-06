import RestaurantCard from './RestaurantCard'
import restaurantsList from '../utils/mockData'
import { useEffect, useState } from 'react'

const Body = () => {

    let [restaurantsLists, setrestaurantsList] = useState([]);

    useEffect(() => {
        console.log("use effext");
        fetchdata()
    })

    const fetchdata = async () => {
        const data = fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const datas = await data
        const jsondata = await datas.json();
        let Restaurentdatas = jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setrestaurantsList(Restaurentdatas)
    }


    if (restaurantsLists.length === 0) {
        return <h1>Loading........</h1>
    }

    return (
        <div>
            <div id="body-container">
                <input id="searchinput" type="search" name="search" placeholder='Search the items!!!'></input>
                <button id="searchbtn"
                >Search</button>
                <button onClick={() => {
                    filteredlist = restaurantsList.filter(
                        (items) => {
                            return items.info.avgRating > 4.4
                        })
                    setrestaurantsList(filteredlist);
                }} id="searchbtn">Top rated Restaurents</button>
            </div>
            <div className="restaur-container">
                {
                    restaurantsLists.map((rest) => {
                        return <RestaurantCard key={rest.info.id
                        } restData={rest} />
                    })
                }
            </div>
        </div >
    )
}

export default Body; 