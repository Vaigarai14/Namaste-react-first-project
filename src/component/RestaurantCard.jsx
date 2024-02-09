import { FOOD_IMG } from '../utils/constants'
import { RATING_LOGO } from '../utils/constants'

const RestaurantCard = (props) => {
    const { restData } = props;
    const { name, cuisines, avgRatingString, sla, costForTwo, cloudinaryImageId } = restData?.info

    return (
        <div className='res-card'>
            <div className='res-img'>
                <img className='img' src={FOOD_IMG + cloudinaryImageId}></img>
            </div>
            <div className='card-details'>
                <div className="main-feat">
                    <h6>{name}</h6>
                    <h5>{cuisines.slice(0, 4).join(" , ") + "..."}</h5>
                </div>
                <div className='sub-feat'>
                    <div className='rating'>
                        <img src={RATING_LOGO}></img>
                        <p>{avgRatingString}</p>
                    </div>
                    <p>{sla.slaString}</p>
                    <p>{costForTwo}</p>
                </div>
                <h5>free delivery</h5>
            </div>
        </div>
    )
}


export default RestaurantCard;