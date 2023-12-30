import { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import './BurgerMenu.scss'

export function BurgerMenu() {
  const [openNavbar, setOpenNavbar] = useState(false)

  function handleClickToggleNavbar() {
    setOpenNavbar(!openNavbar)
    document.body.style.overflow = openNavbar ? 'auto' : 'hidden';

    const burgerIcon = document.querySelector('.burger__icon');
    burgerIcon?.classList.toggle('_active')

    const navbarBody = document.querySelector('.navbar__body')
    navbarBody?.classList.toggle('_active')
  }

  useEffect(() => {
    const handleClickCloseNavbar = (event) => {
      if (!event.target.closest('.burger__icon')) {
        setOpenNavbar(false);
        document.body.style.overflow = !openNavbar ? 'auto' : 'hidden';
        const burgerIcon = document.querySelector('.burger__icon');
        burgerIcon?.classList.remove('_active')
      }
    };

    document.addEventListener('click', handleClickCloseNavbar);
    return () => document.removeEventListener('click', handleClickCloseNavbar);
  }, []);


  return (
    <nav className="burger">
      <div className="burger__icon" onClick={handleClickToggleNavbar}>
        <span></span>
      </div>
      <div className={`nav ${openNavbar ? 'nav__display-block' : 'nav__display-none'}`}><Navbar />
      </div>
    </nav>
  )
}
