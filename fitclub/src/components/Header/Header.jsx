import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from "react-scroll"
const Header = () => {

  const [menuOpened, setMenuopened] = useState(false);
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className='header' id='header'>
      <img src={Logo} alt="" className='logo' />
      {menuOpened === false && mobile === true ? (
        <div
          style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}
          onClick={() => setMenuopened(true)}
        >
          <img src={Bars} alt="" style={{ width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) :
        (
          <ul className='header-menu'>
            <li><Link
              onClick={() => setMenuopened(false)}
              to='header'

              span={true}
              smooth={true}
            >Home</Link></li>
            <li><Link
              onClick={() => setMenuopened(false)}
              to='programs'
              span={true}
              smooth={true}
            >Program</Link></li>
            <li onClick={() => setMenuopened(false)}><Link
              onClick={() => setMenuopened(false)}
              to='reasons'
              span={true}
              smooth={true}
            >Why Us</Link></li>
            <li ><Link
              onClick={() => setMenuopened(false)}
              to='plans'
              span={true}
              smooth={true}
            >Plans</Link></li>
            <li>
              <Link
                onClick={() => setMenuopened(false)}
                to='testimonial'
                span={true}
                smooth={true}
              >Testimonials</Link></li>
          </ul>
        )}

    </div>

  )
}

export default Header
