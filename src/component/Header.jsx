import { LOGO_URL } from '../utils/constants'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import useonlinestatus from '../utils/useonlinestatus'
import UserContext from '../utils/UserContext'


export const Header = () => {


    let btnname = "Login"

    const [btnnames, setbtnname] = useState(btnname)
    const onlinestatus = useonlinestatus()

    const { userName } = useContext(UserContext)

    return (
        <div className='font-[Basis Grotesque Pro] px-8
         header flex items-center justify-between
          overflow-hidden h-28 m-4 shadow-xl sm:text-red-900 '>
            <div className='logo '>
                <img
                    src={LOGO_URL}
                    width={'200em'}></img>
            </div>
            <div id='nav-tabs' className='' >
                <ul className='flex '>
                    <li className='px-4 py-2 font-semibold text-xl'><Link to='/'>Home</Link></li>
                    <li className='px-4 py-2 font-semibold text-xl'><Link to='/about'>About Us</Link></li>
                    <li className='px-4 py-2 font-semibold text-xl'><Link to='/contact'>Contact Us</Link></li>
                    {onlinestatus === true ? <li className='px-4 py-2 font-semibold text-xl'><Link to='#'>Cart ✅</Link></li> : <li><Link to='#'>Cart 🔴</Link></li>}
                    <button className='item-center px-4 py-2 bg-[#ffa939] text-white rounded-lg outline-none'
                        onClick={() => {
                            btnnames === "Login" ?
                                setbtnname("Logout") :
                                setbtnname("Login");

                        }} id="loginbtn">{btnnames}</button>
                    <li className='px-4 py-2 font-semibold text-xl'>{userName}</li>
                </ul>
            </div >
        </div >
    )
}


export default Header;