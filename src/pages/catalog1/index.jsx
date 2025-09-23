import React from 'react'
import s from './styles.module.scss'
import Footer from 'layouts/home/footer/index.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal, faList } from '@fortawesome/free-solid-svg-icons'


const CatalogPage = () => {
  return (
    <div>
      <div className={s.header}>
        <div className={s.topRow}>
          {/* Left - Sort By */}
          <div className={s.left}>
            <select className={s.sortSelect}>
              <option value=''>Sort By</option>
              <option value='price'>Price</option>
              <option value='name'>Name</option>
            </select>
          </div>

          {/* Center - Title */}
          <div className={s.center}>
            <h1 className={s.title}>Catalogue Name</h1>
          </div>

          {/* Right - Icons */}
          <div className={s.right}>
            <button className={s.iconBtn}>
              <FontAwesomeIcon icon={faGripHorizontal} />
            </button>
            <button className={s.iconBtn}>
              <FontAwesomeIcon icon={faList} />
            </button>
            <button className={s.iconBtn}>☰</button>
          </div>
        </div>

        {/* Divider */}
        <hr className={s.divider} />

        {/* Bottom Row */}
        <div className={s.bottomRow}>
          <div className={s.bottomLeft}>
            <button className={s.linkBtn}>Select All</button>
            <button className={s.linkBtn}>Deselect</button>
          </div>
          <div className={s.bottomRight}>
            <button className={s.queryBtn}>Send Query</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CatalogPage
