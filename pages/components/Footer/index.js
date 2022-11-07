import Image from 'next/image'
import LogoXs from '../../../assets/svg/logo-mobile.svg'

export const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="footer">
      <div className="content">
        <div className='footer-container'>
          <a href={'#'}>
            <Image src={LogoXs} alt={'logo'} />
          </a>

          <div className='top' onClick={scrollToTop}>
            <div className='icon-scroll'></div>
          </div>
        </div>

      </div>
    </div>
  )
}