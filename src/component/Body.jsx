import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'

const Body = () => {

    let [orignallist, setorignallist] = useState([]);

    let [filteredlistofitem, setfilteredlistofitem] = useState([])

    let [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchdata();
    }, [])


    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsondata = await data.json()
        let Restaurentdatas = jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setorignallist(Restaurentdatas)
        setfilteredlistofitem(Restaurentdatas)
    }


    return orignallist.length === 0 ? <h1>Loading........</h1> : (
        <div>
            <div id="body-container">
                <input
                    id="searchinput"
                    type="search"
                    name="search"
                    placeholder='Search the items!!!'
                    value={searchText}
                    onChange={((e) => {
                        return setsearchText(e.target.value)
                    })}
                ></input>
                <button
                    onClick={(() => {
                        let filteredlists = orignallist.filter((ele) => {
                            return ele.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setfilteredlistofitem(filteredlists)
                    })}
                    id="searchbtn"
                >Search</button>
                <button onClick={() => {
                    const filteredlisted = orignallist.filter(
                        (items) => {
                            return items.info.avgRating > 4.3
                        })
                    setfilteredlistofitem(filteredlisted);
                }}
                    id="searchbtn">Top rated Restaurents</button>
            </div>

            <div className="restaur-container">
                {
                    filteredlistofitem.map((rest) => {
                        return <RestaurantCard key={rest.info.id
                        } restData={rest} />
                    })
                }
            </div>
        </div >
    )
}

export default Body; 