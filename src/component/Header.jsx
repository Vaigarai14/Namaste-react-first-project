import { LOGO_URL } from '../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useonlinestatus from '../utils/useonlinestatus'


export const Header = () => {
    let btnname = "Login"

    const [btnnames, setbtnname] = useState(btnname)
    const onlinestatus = useonlinestatus()

    return (
        <div className='header'>
            <div className='logo'>
                <img
                    src={LOGO_URL}
                    width={'200em'}></img>
            </div>
            <div id='nav-tabs'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    {onlinestatus === true ? <li><Link to='#'>Cart ✅</Link></li> : <li><Link to='#'>Cart 🔴</Link></li>}
                    <button className='px-4 p-2 bg-[#ffa939] text-white rounded-lg outline-none'
                        onClick={() => {
                            btnnames === "Login" ?
                                setbtnname("Logout") :
                                setbtnname("Login");

                        }} id="loginbtn">{btnnames}</button>
                </ul>
            </div >
        </div>
    )
}


export default Header;