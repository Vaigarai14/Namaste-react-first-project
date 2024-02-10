import { LOGO_URL } from '../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    let btnname = "Login"

    const [btnnames, setbtnname] = useState(btnname)

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
                    <li><Link to='#'>Cart</Link></li>
                    <button onClick={() => {
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