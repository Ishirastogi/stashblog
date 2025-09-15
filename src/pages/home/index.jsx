import { useEffect, useState } from 'react'
import s from './styles.module.scss'
import { Chunk, head } from 'helpers'
import Footer from "layouts/home/footer/index.jsx"; 


const TopProducts = [
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
    image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },{
    id: 4,
    name: 'Rocking Chairs',
    image: 'https://images.pexels.com/photos/4992538/pexels-photo-4992538.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    id: 4,
    name: 'ENGRAVED POTS',
    image: 'https://images.pexels.com/photos/4992538/pexels-photo-4992538.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

const newArrivals = [
  {
    id: 1,
    name: 'Hand Painted Clay Pots',
    image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=400',
    code: '#90234'
  },
  {
    id: 2,
    name: 'Sculptures & Figurines',
    image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    id: 4,
    name: 'SQUARE TABLE',
    image: 'https://images.pexels.com/photos/4992538/pexels-photo-4992538.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    name: 'SQUARE TABLE',
    image: 'https://images.pexels.com/photos/4992538/pexels-photo-4992538.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

function App() {
  const [topProducts, setTopProducts] = useState(Chunk(TopProducts, 6))
  useEffect(() => {
    head({ title: 'homepage' })
  }, [])

  useEffect(() => {
    let swiper;

    if (topProducts.length) {
      swiper = new window.Swiper(`.topProductSwiper`, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        lazy: true,
        preloadImages: false,
        autoplay: false,
        navigation: {
          nextEl: `.topProductSwiperNext`,
          prevEl: `.topProductSwiperPrev`,
        },
      });
    }
    return () => {
      if (swiper) swiper.destroy(true, true);
    };
  }, [topProducts.length]);
  return (
    <div className={s.app}>
   

      {/* Hero */}
      <section className={s.hero}>
        <img
          src='https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800'
          alt='Featured'
        />
      </section>

      {/* Top Products */}
      <section className={s.section}>
        <h2>Top Products</h2>
        
          <div className={'swiper topProductSwiper '   + s.swiperContainer + ' ' + s.grid6}>
            <div className={'swiper-wrapper ' + s.swiperWrapper}>
             {topProducts.map((product, i) => (
                    <div className={s.grid6 + ' swiper-slide'} key={i}>
                      {product.map((p) => (
                        <div key={p.id} className={s.card}>
                          <img src={p.image} alt={p.name} />
                          <div className={s.cardInfo}>
                            <h3>{p.name}</h3>
                            <p>{p.code}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
            </div>
            <div className='swiper-button-next topProductSwiperPrev'></div>
          <div className='swiper-button-prev topProductSwiperNext'></div>
          </div>
      </section>

      {/* Top Catalogs */}
      <section className={s.sectionAlt}>
        <h2>Top Catalogs</h2>
        <div className={s.grid4}>
          {topCatalogs.map(c => (
            <div key={c.id} className={s.card}>
              <img src={c.image} alt={c.name} />
              <div className={s.cardInfoCenter}>
                <h3>{c.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className={s.section}>
        <h2>New Arrivals</h2>
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
      </section>

      {/* Categories */}
      <section className={s.sectionAlt}>
        <h2>Categories</h2>
        <div className={s.grid4}>
          {categories.map(c => (
            <div key={c.id} className={s.card}>
              <img src={c.image} alt={c.name} />
              <div className={s.cardInfoCenter}>
                <h3>{c.name}</h3>
              </div>
            </div>
          ))}
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
