import { FOOD_IMG } from '../utils/constants'
import { RATING_LOGO } from '../utils/constants'

const RestaurantCard = (props) => {
    const { restData } = props;
    const { name, cuisines, avgRatingString, sla, costForTwo, cloudinaryImageId } = restData?.info

    return (
        <div className=''>
            <div className='py-6 h-[25em] border-2 border-slate-200  w-72 
             hover:shadow-xl rounded-xl hover:shadow-gray-400 '>
                <div className='res-img mx-4 mb-4 flex justify-center pb-2 '>
                    <img
                        className=' text-center object-cover 
                        rounded-lg w-72 h-48 '
                        src={FOOD_IMG + cloudinaryImageId}></img>
                </div>
                <div className='card-details px-4 mx-2'>
                    <div className="main-feat">
                        <h6 className='font-semibold text-xl my-2'>{name}</h6>
                        <h5 className='text-sm text-slate-500'>{cuisines.slice(0, 3).join(" , ") + "..."}</h5>
                    </div>
                    <div className='sub-feat flex items-center font-semibold justify-between text-md'>
                        <div className='rating flex rounded-sm py-2 '>
                            <img className='text-yellow bg-green-600 rounded-2xl mx-2 size-6 color=[#ffa939]' src={RATING_LOGO}></img>
                            <p className='font-semibold '>{avgRatingString}</p>
                        </div>
                        <p className='font-semibold'>{sla.slaString}</p>
                        <p className=''>{costForTwo}</p>
                    </div>
                    <h5 className='font-semibold mx-1' id="freedev">Free delivery</h5>
                </div>
            </div>
        </div>
    )
}

// input (Restaurent card) => output (new enhaced label card)
export const withpromotedlabel = (RestaurantCard) => {
    return (props) => {
        console.log(props.restData.info);
        return (
            <div className=''>
                <RestaurantCard {...props} />
                <div className='bg-gradient-to-t from-gray-900 mx-[18px] relative bottom-[234px] rounded-b-lg '>
                    <h1 className='text-lg font-bold p-2 m-2 w-fit text-slate-50 '>{props.restData.info.aggregatedDiscountInfoV3.header
                        + " " + props.restData.info.aggregatedDiscountInfoV3.subHeader}</h1>
                </div>
            </div>
        )
    }
}

export default RestaurantCard;