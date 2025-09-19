import { useState, useEffect } from 'react'
import { Menu, Search, User, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import s from './styles.module.scss'
import Logo from "images/logo/logo.png";

export default function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Navbar */}
      <header className={`${s.header} ${isMenuOpen ? s.open : ''} ${isScrolled ? s.scrolled : ''}`}>
        {/* Left section */}
        <div className={s.headerLeft}>
          <button 
            className={s.iconBtn} 
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Center (Logo) */}
        <div className={s.headerCenter}>
          <Link to="/home">
            <img 
              src={Logo} 
              alt="Brand Logo" 
              className={s.logoImage} 
            />
          </Link>
        </div>

        {/* Right section */}
        <div className={s.headerRight}>
          <button className={s.iconBtn}>
            <Search size={28} />
          </button>
          <button className={s.iconBtn}>
            <User size={28} />
          </button>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <nav className={`${s.sideNav} ${isMenuOpen ? s.show : ''}`}>
        <button 
          className={s.closeBtn} 
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={28} />
        </button>

        <ul>
          <li><Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
          <li><Link to="/catalogue" onClick={() => setIsMenuOpen(false)}>Catalouges</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </nav>
    </>
  )
}
