import { useEffect} from 'react'
import s from './styles.module.scss'
import {  head } from 'helpers'
import { ArrowRight, ArrowLeft } from 'lucide-react'

import Footer from 'layouts/home/footer/index.jsx'

const topProducts = [
  {
    id: 1,
    name: 'Curved Wooden Tables',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 2,
    name: 'Ceramic Flower Pots',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 3,
    name: 'Accent Chairs',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 4,
    name: 'Decorative Vases',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 5,
    name: 'Decorative Vases',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 6,
    name: 'Meditation Jars',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 6,
    name: 'Meditation Jars',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 5,
    name: 'Decorative Vases',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 6,
    name: 'Meditation Jars',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  }
]

const topCatalogs = [
  {
    id: 1,
    name: 'ACCENT CHAIRS',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'FLOWER POTS',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'SIDE TABLES',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 1,
    name: 'ACCENT CHAIRS',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

const newArrivals = [
  {
    id: 1,
    name: 'Hand Painted Clay Pots',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 2,
    name: 'Sculptures & Figurines',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 3,
    name: 'Decorative Vases',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 4,
    name: 'Beautiful Pots',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 5,
    name: 'Library Stool Chair',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 6,
    name: 'Copper Pots',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  }
]

const categories = [
  {
    id: 1,
    name: 'COFFEE TABLE',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'OVAL POTS',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'ROUND TABLE',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'OVAL POTS',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

function App() {

  useEffect(() => {
    head({ title: 'homepage' })
  }, [])

  useEffect(() => {
    let heroSwiper

    heroSwiper = new window.Swiper(`.heroSwiper`, {
      slidesPerView: 1,
      loop: true,
      autoplay: { delay: 3000 },
      navigation: {
        nextEl: `.heroSwiperNext`,
        prevEl: `.heroSwiperPrev`
      }
    })

  
    return () => {
      if (heroSwiper) heroSwiper.destroy(true, true)
    }
  }, [topProducts.length])

  return (
    <div className={s.app}>
      {/* Hero */}
      <section className={s.hero}>
        <div className={'swiper heroSwiper'}>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <img
                src='https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800'
                alt='Featured 1'
              />
            </div>
            <div className='swiper-slide'>
              <img
                src='https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=800'
                alt='Featured 2'
              />
            </div>
            <div className='swiper-slide'>
              <img
                src='https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
                alt='Featured 3'
              />
            </div>
          </div>

          {/* Navigation (optional) */}
          <div className='swiper-button-next heroSwiperNext'></div>
          <div className='swiper-button-prev heroSwiperPrev'></div>
        </div>
      </section>

      {/* Top Products */}
     <section className={s.section}>
        {/* Header */}
        <div className={s.headerRow}>
          <h2 className={s.headerTitle}>Top Products</h2>
          <div className={s.arrows}>
            <div className={s.arrowBtn}>
              <ArrowLeft className={s.arrowIcon} />
            </div>
            <div className={s.arrowBtn}>
              <ArrowRight className={s.arrowIcon} />
            </div>
          </div>
        </div>
        <div className={s.grid6}>
          {newArrivals.map(p => (
            <div key={p.id} className={s.card}>
              <img src={p.image} alt={p.name} />
              <div className={s.cardInfo}>
                <h3>{p.name}</h3>
                <p>{p.code}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={s.viewAllContainer}>
          <button className={s.viewAllBtn}>View All</button>
        </div>
      </section>

      {/* Top Catalogs */}
      <section className={s.sectionAlt}>
        {/* Header */}
        <div className={s.headerRow}>
          <h2 className={s.headerTitle}>Top Catalogs</h2>
          <div className={s.arrows}>
            <div className={s.arrowBtn}>
              <ArrowLeft className={s.arrowIcon} />
            </div>
            <div className={s.arrowBtn}>
              <ArrowRight className={s.arrowIcon} />
            </div>
          </div>
        </div>

        <div className={s.grid4}>
          {topCatalogs.map(c => (
            <div key={c.id} className={s.catalogWrapper}>
              <div className={s.catalogCard}>
                <img src={c.image} alt={c.name} />
              </div>
              <div className={s.cardInfoCenter}>
                <h3>{c.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={s.viewAllContainer}>
          <button className={s.viewAllBtn}>View All</button>
        </div>
      </section>

      {/* New Arrivals */}
      <section className={s.section}>
        {/* Header */}
        <div className={s.headerRow}>
          <h2 className={s.headerTitle}>New Arrivals</h2>
          <div className={s.arrows}>
            <div className={s.arrowBtn}>
              <ArrowLeft className={s.arrowIcon} />
            </div>
            <div className={s.arrowBtn}>
              <ArrowRight className={s.arrowIcon} />
            </div>
          </div>
        </div>
        <div className={s.grid6}>
          {newArrivals.map(p => (
            <div key={p.id} className={s.card}>
              <img src={p.image} alt={p.name} />
              <div className={s.cardInfo}>
                <h3>{p.name}</h3>
                <p>{p.code}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={s.viewAllContainer}>
          <button className={s.viewAllBtn}>View All</button>
        </div>
      </section>

      {/* Categories */}
      <section className={s.sectionAlt}>
        {/* Header */}
        <div className={s.headerRow}>
          <h2 className={s.headerTitle}>CATEGORIES</h2>
          <div className={s.arrows}>
            <div className={s.arrowBtn}>
              <ArrowLeft className={s.arrowIcon} />
            </div>
            <div className={s.arrowBtn}>
              <ArrowRight className={s.arrowIcon} />
            </div>
          </div>
        </div>

        <div className={s.grid4}>
          {categories.map(c => (
            <div key={c.id} className={s.catalogWrapper}>
              <div className={s.catalogCard}>
                <img src={c.image} alt={c.name} />
              </div>
              <div className={s.cardInfoCenter}>
                <h3>{c.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={s.viewAllContainer}>
          <button className={s.viewAllBtn}>View All</button>
        </div>
      </section>

      {/* Footer
      <footer className={s.footer}>
        <p>© 2024 Moradabad Export. All rights reserved.</p>
      </footer> */}
      <Footer />
    </div>
  )
}

export default App
