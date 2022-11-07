import { useState } from 'react'
import Image from 'next/image'
import Logo from '../../../assets/svg/logo.svg'
import LogoXs from '../../../assets/svg/logo-mobile.svg'
import ImageHeader from '../../../assets/png/image-header.png'
import ImageHeaderMobile from '../../../assets/png/image-header-mobile.png'
import ArrowWhite from '../../../assets/svg/arrow-white.svg'
import Button from '../Button';
import Hamburger from 'hamburger-react'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <header className='header'>
      <div className='container-navbar-xs'>
        <div className={isOpen ? 'opened' : 'closed'}>
          <div className='navbar-xs'>
            <div className='header-navbar'>
              <a href={'#'}>
                <Image src={isOpen ? LogoXs : Logo} alt={'logo'} />
              </a>

              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                distance="lg"
                size={28}
                rounded
                hideOutline={false}
                color={!isOpen ? '#F5F6F6' : '#E21D79'}
              />
            </div>
            {isOpen && (
              <div>
                <hr />
                <ul className='links-menu'>
                  <li><a href='#'>Nulla</a></li>
                  <li><a href='#'>Víverra</a></li>
                  <li><a href='#'>Accumsan</a></li>
                  <li><a href='#'>Nulla</a></li>
                  <li><a href='#'>Nascetur</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='content'>
        <div className='navbar-xl'>
          <a href={'#'}>
            <Image src={Logo} alt={'logo'} />
          </a>
          <ul className='links-menu'>
            <li><a href='#'>Nulla</a></li>
            <li><a href='#'>Víverra</a></li>
            <li><a href='#'>Accumsan</a></li>
            <li><a href='#'>Nulla</a></li>
            <li><a href='#'>Nascetur</a></li>
          </ul>
        </div>
      </div>

      <div className='wrapper-header'>
        <div className='overlay'></div>
        <Image src={ImageHeader} alt={'image'} className="image-header" />
        <Image src={ImageHeaderMobile} alt={'image'} className="image-header-mobile" />

        <div className='content'>
          <div className='box-title'>
            <div className='title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
            <div>
              <Button
                background={'button-pink'}
                iconColor={'icon-arrow-white'}
                src={ArrowWhite}
                title="Lorem ipsum dolor"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;