import { Restaurenteachitem } from './Restauranteachitem'
import { useState } from 'react'

export const Restaurentcarddropdown = (props) => {

    const { title } = props.title.card.card

    const [showitem, setshowitem] = useState(false)  // false  //true

    const handledata = () => setshowitem(!showitem)   //false not = false (true)  // true = not true (false )

    return (
        <div className="flex justify-center"
        >
            <div className=" w-11/12">
                <div className=" r px-8 p-4 shadow-lg shadow-gray-300 rounded-xl my-2" key={title}>
                    <div
                        onClick={handledata}
                        className="flex justify-between items-center cursor-pointer" >
                        <h1 className='py-4 text-xl font-bold'>{title} ({props.title.card.card?.itemCards.length})</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="#a1a1a1" d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0"></path></svg>
                    </div>
                    <div>
                        {showitem &&
                            <Restaurenteachitem eachcard={props} />
                        }
                    </div>
                </div >
                <h1></h1>
            </div >
        </div>
    )
}



// let itemCards = []
// if (item?.categories) {
//     itemCards = item?.categories[0]?.itemCards
// }
// else if (item?.categories) {
//     itemCards = item?.categories
// }
// else if (item?.itemCards) {
//     itemCards = item?.itemCards
// [2]?.card?.card
// }