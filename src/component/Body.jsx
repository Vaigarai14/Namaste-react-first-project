import RestaurantCard, { withpromotedlabel } from './RestaurantCard'
import { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom';
import useonlinestatus from '../utils/useonlinestatus'
import Shimmer from './Shimmer';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import useRestaurentMenu from '../utils/useRestaurentMenu';

const Body = () => {
    const onlinestatus = useonlinestatus()

    const { orignallist } = useRestaurentMenu()

    const Newpromotedcard = withpromotedlabel(RestaurantCard)

    let [filteredlistofitem, setfilteredlistofitem] = useState([])

    let [searchText, setsearchText] = useState("");

    const { setname } = useContext(UserContext)  // use context used in header 

    useEffect(() => {
        setfilteredlistofitem(orignallist)
    }, [orignallist])


    return onlinestatus === false ? <div className='items-center h-[35em] flex justify-center'><img src='https://cdni.iconscout.com/illustration/premium/thumb/man-upset-with-no-wifi-4898768-4084522.png'></img></div> :
        orignallist.length === 0 ? <Shimmer /> : (

            <div >
                <div id="body-container" className='flex justify-center m-12'>
                    <input
                        className='outline-none p-3 w-80 border-2 rounded-lg border-[#ffa939]'
                        id="searchinput"
                        type="search"
                        name="search"
                        placeholder='Search the items!!!'
                        value={searchText}
                        onChange={((e) => {
                            return setsearchText(e.target.value)
                            // , setname(e.target.value)  // use Context used here!!!!!!!
                        })}
                    ></input>
                    <button
                        className='hover:bg-white hover:border-[#ffa939] hover:text-[#ffa939]  w-24 font-semibold rounded-lg bg-[#ffa939] border-2 text-white ml-4'
                        onClick={(() => {
                            let filteredlists = orignallist.filter((ele) => {
                                return ele.info.name.toLowerCase().includes(searchText.toLowerCase())
                            })
                            setfilteredlistofitem(filteredlists)
                        })}
                        id="searchbtn"
                    >Search</button>
                    <button
                        className='w-48 hover:bg-white hover:border-[#ffa939] hover:text-[#ffa939]  font-semibold rounded-lg bg-[#ffa939] border-2 text-white ml-4'
                        onClick={() => {
                            const filteredlisted = orignallist.filter(
                                (items) => {
                                    return items.info.avgRating > 4.3
                                })
                            setfilteredlistofitem(filteredlisted);
                        }}
                        id="searchbtn">Top rated Restaurents</button>
                </div>

                <div className="restaur-container flex flex-wrap justify-evenly ">
                    {
                        filteredlistofitem.map((rest) => {
                            return <Link key={rest.info.id}
                                to={"/restaurant/" + rest.info.id}>
                                {rest.info.aggregatedDiscountInfoV2 !== undefined ? <RestaurantCard restData={rest} />
                                    : <Newpromotedcard restData={rest} />}</Link>


                        })
                    }
                </div>
            </div >
        )
}

export default Body; 