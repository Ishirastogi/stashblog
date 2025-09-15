import { useEffect, useState } from 'react'
import s from './styles.module.scss'
import { head } from 'helpers'
import Footer from 'layouts/home/footer/index.jsx'

const productsData = [
  {
    id: 1,
    name: 'Ceramic Arch Vase',
    category: 'Vases',
    price: '$89.00',
    description:
      'A minimalist ceramic vase featuring a distinctive arch design. Handcrafted with attention to detail, this piece brings modern elegance to any space. The warm terracotta finish complements both contemporary and traditional interiors.',
    specifications: 'Height: 12 inches, Width: 8 inches, Material: Ceramic, Finish: Matte terracotta',
    image: 'https://images.pexels.com/photos/6473/art-earth-pottery-ceramic.jpg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'Abstract Sculpture Bowl',
    category: 'Sculptures',
    price: '$156.00',
    description:
      'An abstract ceramic bowl that doubles as a striking sculptural piece. The flowing lines and organic form create visual interest while maintaining functionality. Perfect for display or practical use.',
    specifications: 'Diameter: 10 inches, Height: 6 inches, Material: Glazed ceramic, Weight: 2.5 lbs',
    image: 'https://images.pexels.com/photos/5945/art-art-materials-artist-artwork.jpg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'Flowing Form Vase',
    category: 'Vases',
    price: '$124.00',
    description:
      'Inspired by natural water flow, this ceramic vase features smooth, undulating curves. The neutral color palette and organic shape make it a versatile accent piece for modern homes.',
    specifications: 'Height: 14 inches, Base: 5 inches, Material: Stoneware ceramic, Color: Natural white',
    image: 'https://images.pexels.com/photos/4226925/pexels-photo-4226925.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    name: 'Bamboo Serving Tray',
    category: 'Serving',
    price: '$78.00',
    description:
      'Sustainably sourced bamboo serving tray with clean lines and natural finish. Features raised edges for secure serving and a smooth surface perfect for entertaining or daily use.',
    specifications: 'Length: 16 inches, Width: 12 inches, Material: Bamboo wood, Finish: Natural oil',
    image: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    name: 'Ceramic Tea Pot',
    category: 'Teaware',
    price: '$95.00',
    description:
      'Elegant ceramic teapot with a contemporary silhouette. The smooth glaze and ergonomic handle provide both beauty and functionality for the perfect tea service experience.',
    specifications: 'Capacity: 24 oz, Height: 7 inches, Material: Porcelain ceramic, Color: Charcoal gray',
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 6,
    name: 'Modernist Table Lamp',
    category: 'Lighting',
    price: '$198.00',
    description:
      'Sculptural table lamp combining form and function. The curved ceramic base creates dramatic shadows while providing warm, ambient lighting. A statement piece for contemporary interiors.',
    specifications: 'Height: 18 inches, Base: 8 inches, Material: Ceramic & metal, Bulb: E26 LED compatible',
    image: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 7,
    name: 'Geometric Planter Set',
    category: 'Planters',
    price: '$145.00',
    description:
      'Set of three geometric planters in graduated sizes. The angular design adds modern sophistication to your plant display while the neutral finish complements any decor style.',
    specifications: "Sizes: Small (4'), Medium (6'), Large (8'), Material: Concrete composite, Drainage included",
    image: 'https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 8,
    name: 'Minimalist Fruit Bowl',
    category: 'Serving',
    price: '$67.00',
    description:
      'Clean-lined fruit bowl with a generous capacity and timeless design. The smooth interior and subtle exterior texture create visual interest while maintaining practical functionality.',
    specifications: 'Diameter: 12 inches, Height: 4 inches, Material: Glazed ceramic, Color: Off-white',
    image: 'https://images.pexels.com/photos/3992212/pexels-photo-3992212.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

export default function Catalog3() {
  const [products, setProducts] = useState(productsData)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    head({ title: 'Catalog 3 - Modern Design Collection' })
  }, [])

  useEffect(() => {
    if (!searchTerm) {
      setProducts(productsData)
    } else {
      const filtered = productsData.filter(
        product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setProducts(filtered)
    }
  }, [searchTerm])

  return (
    <div>
      {/* Header */}
      <header className={s.header}>
        <div className={s.container}>
          <h1 className={s['catalog-title']}>Catalog 3</h1>
          <div className={s['search-container']}>
            <input
              type='text'
              placeholder='Search products...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className={s['search-input']}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={s['main-content']}>
        <div className={`${s.container} ${s['products-grid']}`}>
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`${s['product-card']} ${index % 2 === 0 ? s['image-right'] : s['image-left']}`}
            >
              <div className={s['product-content']}>
                <div className={s['product-info']}>
                  <h2 className={s['product-name']}>{product.name}</h2>
                  <p className={s['product-category']}>{product.category}</p>
                  <p className={s['product-description']}>{product.description}</p>
                  <div className={s['product-specifications']}>
                    <strong>Specifications:</strong>
                    <p>{product.specifications}</p>
                  </div>
                  <div className={s['product-footer']}>
                    <span className={s['product-price']}>{product.price}</span>
                    <button
                      className={s['add-to-cart-btn']}
                      onClick={e => {
                        e.target.textContent = 'Added!'
                        e.target.style.backgroundColor = 'var(--success)'
                        setTimeout(() => {
                          e.target.textContent = 'Add to Cart'
                          e.target.style.backgroundColor = ''
                        }, 2000)
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className={s['product-image-container']}>
                  <img src={product.image} alt={product.name} className={s['product-image']} loading='lazy' />
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
