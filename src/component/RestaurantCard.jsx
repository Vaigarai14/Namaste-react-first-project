import { FOOD_IMG } from '../utils/constants'
import { RATING_LOGO } from '../utils/constants'

const RestaurantCard = (props) => {
    const { restData } = props;
    const { name, cuisines, avgRatingString, sla, costForTwo, cloudinaryImageId } = restData?.info

    return (
        <div className='my-3 '>
            <div className='py-6 h-fit  w-80 
             hover:shadow-xl rounded-xl hover:shadow-gray-400'>
                <div className='res-img mx-4 my-4 flex justify-center'>
                    {/* mx-4 mt-2 mb-2 p-2 */}
                    <img
                        className=' text-center object-cover 
                        rounded-lg w-72 h-48'
                        src={FOOD_IMG + cloudinaryImageId}></img>
                </div>
                <div className='card-details px-4 mx-2'>
                    <div className="main-feat">
                        <h6 className='font-semibold text-2xl my-2'>{name}</h6>
                        <h5 className='text-lg text-slate-500'>{cuisines.slice(0, 2).join(" , ") + "..."}</h5>
                    </div>
                    <div className='sub-feat flex items-center font-semibold justify-between'>
                        <div className='rating flex rounded-sm w-[70px] py-2 '>
                            <img className='text-yellow bg-green-600 rounded-2xl mx-1 size-6 color=[#ffa939]' src={RATING_LOGO}></img>
                            <p className='font-semibold '>{avgRatingString}</p>
                        </div>
                        <p className='font-semibold '>{sla.slaString}</p>
                        <p className=''>{costForTwo}</p>
                    </div>
                    <h5 className='font-semibold mx-1' id="freedev">Free delivery</h5>
                </div>
            </div>
        </div>
    )
}


export default RestaurantCard;