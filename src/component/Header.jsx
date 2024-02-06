import { LOGO_URL } from '../utils/constants'

export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img
                    src={LOGO_URL}
                    width={'200em'}></img>
            </div>
            <div id='nav-tabs'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>Cart</a></li>
                </ul>
            </div >
        </div>
    )
}


export default Header;