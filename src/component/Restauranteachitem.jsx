
export const Restaurenteachitem = ({ eachcard }) => {
    return (
        <div>
            {
                eachcard.card.card.itemCards.map(({ card: { info } }) => (
                    <div className=' flex justify-between items-center border-b-2 pb-4 pt-2 my-1 ' key={info.id}>
                        <div className=''>
                            <h1 className='py-4 text-lg '>{info.name}</h1>
                            <p className='font-semibold '> ₹ {info.price / 100 || info.defaultPrice / 100}
                            </p>

                            <p className='py-2 w-[45em] text-sm text-slate-500'>{info.description}</p>
                        </div>
                        <div className='text-center relative'>
                            {info.imageId && <img className='size-32 rounded-md object-cover'
                                alt='Image not found'
                                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/' + info.imageId}></img>}
                            {info.imageId ? <button className='absolute left-[1.3em] top-[105px] shadow-lg border-2  border-gray-300  hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] rounded-lg text-center px-8  text-sm text-green-400 bg-white py-2'>Add</button>
                                : <button className='relative right-[16px] shadow-lg border-2  border-gray-300  hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] rounded-lg text-center px-8  text-sm text-green-400 bg-white py-2'>Add</button>}
                        </div>
                    </div >
                )
                )
            }
        </div>
    )
}

//     console.log(props);
//     let item = props?.title?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

//     let itemCards = []
//     if (item?.categories) {
//         itemCards = item?.categories[0]?.itemCards
//     }
//     else if (item?.categories) {
//         itemCards = item?.categories
//     }
//     else if (item?.itemCards) {
//         itemCards = item?.itemCards
//     }