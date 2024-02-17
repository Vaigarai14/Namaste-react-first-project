import { useParams } from 'react-router-dom';
import useRestaurentMenu from '../utils/useRestaurentMenu';

const RestMenu = (() => {
    const { id } = useParams()
    const { restmenu, dropdowncard } = useRestaurentMenu(id)
    console.log(dropdowncard);

    if (!restmenu) {
        return <div>Loading...</div>;
    }
    console.log(restmenu);
    const { data: { cards: [card] } } = restmenu

    const {
        name,
        cuisines,
        avgRatingString,
        costForTwoMessage,
        sla,
        totalRatingsString,
        areaName
    } = card?.card?.card?.info || {};

    let item = dropdowncard?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    let itemCards = []
    if (item?.categories) {
        itemCards = item?.categories[0]?.itemCards
    }
    else if (item?.categories) {
        itemCards = item?.categories
    }
    else if (item?.itemCards) {
        itemCards = item?.itemCards
    }

    // console.log(itemCards);
    // console.log(item);

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
            {
                itemCards.map(({ card: { info } }) => (
                    <div className='px-8 p-4 flex justify-between items-center shadow-xl rounded-xl m-10' key={info.id}>
                        <div className=''>
                            <h1 className='py-4 text-xl font-bold'>{info.name}</h1>
                            <p className='font-semibold '> ₹ {info.price / 100 || info.defaultPrice / 100}
                                {/* <span className='ml-4 p-1 text-sm  text-red-500 bg-red-100'>
                                    {info.offerTags[0].title} | {info.offerTags[0].subTitle}
                                </span> */}
                            </p>

                            <p className='py-2 w-[45em] text-sm text-slate-500'>{info.description}</p>
                        </div>
                        <div className='text-center'>
                            <img className='size-32 rounded-md object-cover'
                                alt='Image not found'
                                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/' + info.imageId}></img>
                            <button className='rounded-lg text-center px-8 border-2 border-gray-300 text-sm'>Add</button>
                        </div>
                    </div >
                )
                )
            }
        </div>)
})



export default RestMenu

// [2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]
