import { Menu, Search, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import s from './styles.module.scss'
import Logo from "images/logo/logo.png";

export default function Main() {
  return (
    <header className={s.header}>
      {/* Left section */}
      <div className={s.headerLeft}>
        <button className={s.iconBtn}>
          <Menu size={15} />
        </button>
        <h1></h1>
      </div>

      {/* Center section (Logo) */}
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
          <Search size={15} />
        </button>
        <button className={s.iconBtn}>
          <User size={15} />
        </button>
      </div>
    </header>
  )
}
