import React from 'react'
import s from './styles.module.scss'
import Footer from 'layouts/home/footer/index.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal, faList } from '@fortawesome/free-solid-svg-icons'

const products = [
  {
    id: 1,
    name: 'Ceramic Vase',
    sku: '#90234',
    image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 2,
    name: 'Clay Pot',
    sku: '#90235',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 3,
    name: 'Decorative Bowl',
    sku: '#90236',
    image: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 4,
    name: 'Sculpture',
    sku: '#90237',
    image: 'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 5,
    name: 'Flower Vase',
    sku: '#90238',
    image: 'https://images.pexels.com/photos/236095/pexels-photo-236095.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 6,
    name: 'Wooden Bowl',
    sku: '#90239',
    image: 'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 1,
    name: 'Ceramic Vase',
    sku: '#90234',
    image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 2,
    name: 'Clay Pot',
    sku: '#90235',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 3,
    name: 'Decorative Bowl',
    sku: '#90236',
    image: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 4,
    name: 'Sculpture',
    sku: '#90237',
    image: 'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 5,
    name: 'Flower Vase',
    sku: '#90238',
    image: 'https://images.pexels.com/photos/236095/pexels-photo-236095.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 6,
    name: 'Wooden Bowl',
    sku: '#90239',
    image: 'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 1,
    name: 'Ceramic Vase',
    sku: '#90234',
    image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 2,
    name: 'Clay Pot',
    sku: '#90235',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 3,
    name: 'Decorative Bowl',
    sku: '#90236',
    image: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 4,
    name: 'Sculpture',
    sku: '#90237',
    image: 'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 5,
    name: 'Flower Vase',
    sku: '#90238',
    image: 'https://images.pexels.com/photos/236095/pexels-photo-236095.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 6,
    name: 'Wooden Bowl',
    sku: '#90239',
    image: 'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 1,
    name: 'Ceramic Vase',
    sku: '#90234',
    image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 2,
    name: 'Clay Pot',
    sku: '#90235',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 3,
    name: 'Decorative Bowl',
    sku: '#90236',
    image: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 4,
    name: 'Sculpture',
    sku: '#90237',
    image: 'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 5,
    name: 'Flower Vase',
    sku: '#90238',
    image: 'https://images.pexels.com/photos/236095/pexels-photo-236095.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 6,
    name: 'Wooden Bowl',
    sku: '#90239',
    image: 'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
    {
    id: 3,
    name: 'Decorative Bowl',
    sku: '#90236',
    image: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 4,
    name: 'Sculpture',
    sku: '#90237',
    image: 'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 5,
    name: 'Flower Vase',
    sku: '#90238',
    image: 'https://images.pexels.com/photos/236095/pexels-photo-236095.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  },
  {
    id: 6,
    name: 'Wooden Bowl',
    sku: '#90239',
    image: 'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
  }
]
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

      <main className={s.mainContent}>
        <div className={s.productGrid}>
          {products.map(product => (
            <div key={product.id} className={s.productItem}>
              <img src={product.image} alt={product.name} />
              <div className={s.productText}>
                <h3>{product.name}</h3>
                <span className={s.sku}>{product.sku}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default CatalogPage
