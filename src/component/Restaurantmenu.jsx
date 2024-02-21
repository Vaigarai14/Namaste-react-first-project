import { useParams } from 'react-router-dom';
import useRestaurentMenu from '../utils/useRestaurentMenu';
import Shimmer from './Shimmer';
import { Restaurentcarddropdown } from './Restaurentcarddropdown';
import { useState } from 'react';

const RestMenu = (() => {
    const { id } = useParams()
    const { restmenu, dropdowncard } = useRestaurentMenu(id)   //api data 

    const [showitem, setshowitem] = useState(0)


    if (!restmenu) {
        return <Shimmer />;
    }

    const {
        name,
        cuisines,
        avgRatingString,
        costForTwoMessage,
        sla,
        totalRatingsString,
        areaName
    } = restmenu.data.cards[2].card.card.info

    const catogory = dropdowncard?.data?.cards[4]?.groupedCard
        ?.cardGroupMap?.REGULAR?.cards.filter((c) => { return c?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' })

    return (
        <div className=' w-[60em] m-auto '>
            <div className='m-4 border-2 p-4'>
                <h1 className='text-3xl font-semibold py-2'>{name}</h1>
                <div className='py-2 flex justify-between items-center text-gray-400 text-sm mb-2'>
                    <div>
                        <p>{cuisines}</p>
                        <p>{areaName} , {sla?.lastMileTravelString}</p>
                    </div>
                    <div className=' border-gray-300 border-2 p-1'>
                        <button
                            className='text-green-600 w-20 font-semibold'>
                            ⭐ {avgRatingString}</button>
                        <p className='border-t-2 '>{totalRatingsString}</p>
                    </div>
                </div>
                <p className=' pb-4 border-b-2 border-slate-400 border-dashed mb-4 text-sm text-gray-500'> 🧡 Far ({sla?.lastMileTravelString}) Additional delivery fee will apply</p>
                <div className=' inline-flex  items-center'>
                    <p className=" mr-4 ">⏳ {sla?.slaString}</p>
                    <p> {costForTwoMessage}</p>
                </div>
            </div>
            <div>
                {catogory.map((element, index) =>
                    < Restaurentcarddropdown
                        key={element?.card?.card?.title}
                        data={element}
                        showitem={index === showitem && true}
                        a={() => setshowitem(index)}
                    />
                )
                }
            </div>
        </div>)
})

export default RestMenu


{
    /* <span className='ml-4 p-1 text-sm  text-red-500 bg-red-100'>
    {info.offerTags[0].title} | {info.offerTags[0].subTitle </span> */
}
// let item = props?.title?.data?.cards[4]?.groupedCard
//     ?.cardGroupMap?.REGULAR?.cards

// const catogory = item.filter((c) => { return c?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' })

// console.log(catogory);

// [2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]
// let item = dropdowncard?.data?.cards[4]?.groupedCard
//     ?.cardGroupMap?.REGULAR?.cards
// // [2]?.card?.card

// card?.card?.card?.info || {};

// const { data: { cards: [card] } } = restmenu

