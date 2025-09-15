import { Menu, Search, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import s from './styles.module.scss'

export default function Main() {
  return (
    <header className={s.header}>
      {/* Left section */}
      <div className={s.headerLeft}>
        <button className={s.iconBtn}>
          <Menu size={20} />
        </button>
        <h1></h1>
      </div>

      {/* Center section (Logo) */}
      <div className={s.headerCenter}>
         <Link to="/home">
    <img 
      src="/images/logo/facebook.png" 
      alt="Brand Logo" 
      className={s.logoImage} 
    />
  </Link>
      </div>

      {/* Right section */}
      <div className={s.headerRight}>
        <button className={s.iconBtn}>
          <Search size={20} />
        </button>
        <button className={s.iconBtn}>
          <User size={20} />
        </button>
      </div>
    </header>
  )
}
