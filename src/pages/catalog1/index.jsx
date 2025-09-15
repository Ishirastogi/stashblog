import React, { useState } from 'react'
import s from './styles.module.scss'
import Footer from "layouts/home/footer/index.jsx"; 


// Import icons from lucide-react
import { Menu, Heart, ShoppingCart, User, Grid, List } from 'lucide-react'
const products = [
  {
    id: 1,
    name: 'Curved Wooden Vases',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vases'
  },
  {
    id: 2,
    name: 'Creative Home Jute',
    image: 'https://images.pexels.com/photos/4992538/pexels-photo-4992538.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'home'
  },
  {
    id: 3,
    name: 'White Ceramic Set',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'ceramic'
  },
  {
    id: 4,
    name: 'Blue & Gold Vase',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vases'
  },
  {
    id: 5,
    name: 'Wicker Basket Set',
    image: 'https://images.pexels.com/photos/4992426/pexels-photo-4992426.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'baskets'
  },
  {
    id: 6,
    name: 'Black Round Pot',
    image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pots'
  },
  {
    id: 7,
    name: 'Hand Painted Clay Pot',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pots'
  },
  {
    id: 8,
    name: 'Ceramic Urn',
    image: 'https://images.pexels.com/photos/1090640/pexels-photo-1090640.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'urns'
  },
  {
    id: 9,
    name: 'White Ceramic Set',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'ceramic'
  },
  {
    id: 10,
    name: 'Blue & Gold Vase',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vases'
  },
  {
    id: 11,
    name: 'Blue & Gold Vase',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vases'
  },
  {
    id: 12,
    name: 'Blue & Gold Vase',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vases'
  },
  {
    id: 13,
    name: 'White Ceramic Set',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'ceramic'
  },
  {
    id: 14,
    name: 'White Ceramic Set',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'ceramic'
  },
  {
    id: 15,
    name: 'White Ceramic Set',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'ceramic'
  },
  {
    id: 16,
    name: 'White Ceramic Set',
    image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'ceramic'
  }
  // ... keep the rest of your product list
]

function App() {
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Sort By')

  const categories = ['Sort By', 'vases', 'pots', 'furniture', 'ceramic', 'sculpture', 'home', 'decor']

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Sort By' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className={s.app}>
     

      {/* Sub Header */}
      <div className={s.subHeader}>
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className={s.dropdown}>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <div className={s.viewOptions}>
          <button onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? s.activeView : s.iconBtn}>
            <Grid size={18} />
          </button>
          <button onClick={() => setViewMode('list')} className={viewMode === 'list' ? s.activeView : s.iconBtn}>
            <List size={18} />
          </button>
          <span>{filteredProducts.length} items</span>
        </div>
      </div>

      {/* Product Grid */}
      <main className={s.main}>
        <div className={viewMode === 'grid' ? s.grid : s.list}>
          {filteredProducts.map(product => (
            <div key={product.id} className={s.card}>
              <div className={s.cardImage}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={s.cardInfo}>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>
            </div>
          ))}
        </div>
        {filteredProducts.length === 0 && <p className={s.noProducts}>No products found matching your criteria.</p>}
      </main>

      <div className={s.backToTopBox}>
        <button className={s.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Back to Top
        </button>
      </div>

      <Footer />
    </div>
  )
}

export default App
