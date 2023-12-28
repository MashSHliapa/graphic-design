import { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import './BurgerMenu.scss'

export function BurgerMenu() {
  const [openNavbar, setOpenNavbar] = useState(false)

  const burgerIcon = document.querySelector('.burger__icon');

  function handleClickOpenMenu() {
    setOpenNavbar(!openNavbar)
    document.body.style.overflow = openNavbar ? 'auto' : 'hidden';
    burgerIcon.classList.toggle('_active')
  }

  useEffect(() => {
    const handleClickCloseMenu = (event) => {
      if (!event.target.closest('.burger__icon')) {
        setOpenNavbar(false);
        document.body.style.overflow = !openNavbar ? 'auto' : 'hidden';
        burgerIcon.classList.remove('_active')
      }
    };

    document.addEventListener('click', handleClickCloseMenu);
    return () => document.removeEventListener('click', handleClickCloseMenu);
  }, []);


  return (
    <nav className="burger">
      <div className="burger__icon" onClick={handleClickOpenMenu}>
        <span></span>
      </div>
      <div className={`nav ${openNavbar ? 'nav__display-block' : 'nav__display-none'}`}><Navbar />
      </div>
    </nav>
  )
}
