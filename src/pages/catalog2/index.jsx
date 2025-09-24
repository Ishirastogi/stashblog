import React from 'react'
import s from './styles.module.scss'
import Footer from 'layouts/home/footer/index.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal, faList } from '@fortawesome/free-solid-svg-icons'
const products = [
  {
    id: 1,
    name: 'Urn Style Pots',
    sku: '#63478',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      Dimensions: 'L:99cm B:109cm H:54cm',
      Material: 'Solid Brass',
      Style: 'Vintage Classic',
      Weight: '12.5 Kg',
      Usage: 'Indoor Display',
      Durability: '10+ Years',
      Finish: 'Antique Gold',
      Polish: 'Glossy Mirror'
    }
  },
  {
    id: 2,
    name: 'Terracotta Figurines',
    sku: '#76572',
    image: 'https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      Dimensions: 'L:85cm B:70cm H:45cm',
      Material: 'Clay',
      Style: 'Handcrafted',
      Weight: '8 Kg',
      Usage: 'Indoor Display',
      Durability: '8+ Years',
      Finish: 'Matte',
      Polish: 'Natural'
    }
  },
  {
    id: 3,
    name: 'Metal Sculpture',
    sku: '#88293',
    image: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      Dimensions: 'L:60cm B:40cm H:25cm',
      Material: 'Aluminum',
      Style: 'Modern',
      Weight: '6.5 Kg',
      Usage: 'Indoor/Outdoor',
      Durability: '15+ Years',
      Finish: 'Polished',
      Polish: 'Mirror Shine'
    }
  },
  {
    id: 4,
    name: 'Wooden Vase',
    sku: '#55231',
    image: 'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      Dimensions: 'L:45cm B:25cm H:20cm',
      Material: 'Teak Wood',
      Style: 'Rustic',
      Weight: '5 Kg',
      Usage: 'Indoor Display',
      Durability: '20+ Years',
      Finish: 'Natural Wood',
      Polish: 'Matte'
    }
  },
  {
    id: 1,
    name: 'Urn Style Pots',
    sku: '#63478',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      Dimensions: 'L:99cm B:109cm H:54cm',
      Material: 'Solid Brass',
      Style: 'Vintage Classic',
      Weight: '12.5 Kg',
      Usage: 'Indoor Display',
      Durability: '10+ Years',
      Finish: 'Antique Gold',
      Polish: 'Glossy Mirror'
    }
  },
  {
    id: 2,
    name: 'Terracotta Figurines',
    sku: '#76572',
    image: 'https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      Dimensions: 'L:85cm B:70cm H:45cm',
      Material: 'Clay',
      Style: 'Handcrafted',
      Weight: '8 Kg',
      Usage: 'Indoor Display',
      Durability: '8+ Years',
      Finish: 'Matte',
      Polish: 'Natural'
    }
  },
  {
    id: 3,
    name: 'Metal Sculpture',
    sku: '#88293',
    image: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      Dimensions: 'L:60cm B:40cm H:25cm',
      Material: 'Aluminum',
      Style: 'Modern',
      Weight: '6.5 Kg',
      Usage: 'Indoor/Outdoor',
      Durability: '15+ Years',
      Finish: 'Polished',
      Polish: 'Mirror Shine'
    }
  },
  {
    id: 4,
    name: 'Wooden Vase',
    sku: '#55231',
    image: 'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      Dimensions: 'L:45cm B:25cm H:20cm',
      Material: 'Teak Wood',
      Style: 'Rustic',
      Weight: '5 Kg',
      Usage: 'Indoor Display',
      Durability: '20+ Years',
      Finish: 'Natural Wood',
      Polish: 'Matte'
    }
  },
  {
    id: 1,
    name: 'Urn Style Pots',
    sku: '#63478',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      Dimensions: 'L:99cm B:109cm H:54cm',
      Material: 'Solid Brass',
      Style: 'Vintage Classic',
      Weight: '12.5 Kg',
      Usage: 'Indoor Display',
      Durability: '10+ Years',
      Finish: 'Antique Gold',
      Polish: 'Glossy Mirror'
    }
  },
  {
    id: 2,
    name: 'Terracotta Figurines',
    sku: '#76572',
    image: 'https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      Dimensions: 'L:85cm B:70cm H:45cm',
      Material: 'Clay',
      Style: 'Handcrafted',
      Weight: '8 Kg',
      Usage: 'Indoor Display',
      Durability: '8+ Years',
      Finish: 'Matte',
      Polish: 'Natural'
    }
  },
  {
    id: 3,
    name: 'Metal Sculpture',
    sku: '#88293',
    image: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      Dimensions: 'L:60cm B:40cm H:25cm',
      Material: 'Aluminum',
      Style: 'Modern',
      Weight: '6.5 Kg',
      Usage: 'Indoor/Outdoor',
      Durability: '15+ Years',
      Finish: 'Polished',
      Polish: 'Mirror Shine'
    }
  },
  {
    id: 4,
    name: 'Wooden Vase',
    sku: '#55231',
    image: 'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      Dimensions: 'L:45cm B:25cm H:20cm',
      Material: 'Teak Wood',
      Style: 'Rustic',
      Weight: '5 Kg',
      Usage: 'Indoor Display',
      Durability: '20+ Years',
      Finish: 'Natural Wood',
      Polish: 'Matte'
    }
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
            <div key={product.id}>
              {/* Image */}
              <div className={s.imageWrapper}>
                <span className={s.greenBox}></span>
                <img src={product.image} alt={product.name} />
              </div>

              {/* Title + Button */}
              <div className={s.productHeader}>
                <div>
                  <h3>{product.name}</h3>
                  <span className={s.sku}>{product.sku}</span>
                </div>
                <button className={s.viewBtn}>View Product</button>
              </div>

              <hr className={s.divider} />

              {/* Specs only values */}
              <div className={s.specsList}>
                {Object.entries(product.specs).map(([label, value], idx) => (
                  <div key={idx} className={s.specItem}>
                    {label !== 'Dimensions' && <span className={s.specLabel}>{label}:</span>}
                    <span>{value}</span>
                  </div>
                ))}
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
