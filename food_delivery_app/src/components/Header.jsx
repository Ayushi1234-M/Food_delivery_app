import logo from '../assets/food_delivery_logo.svg'

export default function Header() {
  return (
    <div>

        <div className='header_component'>

            <div className='logo'>

                <img className='brand_logo' src={logo} alt='logo'></img>

            </div>

            <div className='nav_items'>

                <ul className='nav_links'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>🛒</li>
                </ul>

            </div>

        </div>
      
    </div>
  )
}
