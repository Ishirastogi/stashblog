import { useEffect, useState } from 'react'
import s from './styles.module.scss'
import { head } from 'helpers'
import Footer from 'layouts/home/footer/index.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal, faList } from '@fortawesome/free-solid-svg-icons'

const productsData = [
  {
    id: 1,
    name: 'Ceramic Arch Vase',
    code: '90234',
    category: 'Vases',
    price: '$89.00',
    description:
      'A minimalist ceramic vase featuring a distinctive arch design. The neutral finish complements any decor style and adds a touch of elegance to your home Crafted from high-quality materials, this vase exhibits a lustrous finish that enhances its visual appeal Whether composed of fine ceramic, hand-blown glass, or elegant porcelain, the material’s intrinsic beauty is accentuated through glazing or polishing techniques that lend it a radiant sheen. The surface invites touch as much as sight with textures that range from smooth, glass-like perfection to subtly tactile finishes that evoke a sense of artisanal craftsmanship. Each vase carries the signature of skilled artisans whose hands have ensuring that every curve, contour, and nuance is executed flawlessly. The color palette of this vase is carefully considered to complement a wide array of interior styles. Subtle...',
    specifications: {
      L: '99cm',
      B: '109cm',
      H: '54cm',
      Material: 'Ceramic',
      Style: 'Vintage Classic',
      Durability: '10+ Years',
      Weight: '12.5 Kg',
      Finish: 'Matte Terracotta',
      Usage: 'Indoor Display',
      Polish: 'Glossy Mirror'
    },
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=400'
  },

  {
    id: 2,
    name: 'Abstract Sculpture Bowl',
    code: '90234',
    category: 'Sculptures',
    price: '$156.00',
    description:
      'A minimalist ceramic vase featuring a distinctive arch design. The neutral finish complements any decor style and adds a touch of elegance to your home Crafted from high-quality materials, this vase exhibits a lustrous finish that enhances its visual appeal Whether composed of fine ceramic, hand-blown glass, or elegant porcelain, the material’s intrinsic beauty is accentuated through glazing or polishing techniques that lend it a radiant sheen. The surface invites touch as much as sight with textures that range from smooth, glass-like perfection to subtly tactile finishes that evoke a sense of artisanal craftsmanship. Each vase carries the signature of skilled artisans whose hands have ensuring that every curve, contour, and nuance is executed flawlessly. The color palette of this vase is carefully considered to complement a wide array of interior styles. Subtle...',
    specifications: {
      L: '99cm',
      B: '109cm',
      H: '54cm',
      Material: 'Ceramic',
      Style: 'Vintage Classic',
      Durability: '10+ Years',
      Weight: '12.5 Kg',
      Finish: 'Matte Terracotta',
      Usage: 'Indoor Display',
      Polish: 'Glossy Mirror'
    },
    image: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'Flowing Form Vase',
    code: '90234',
    category: 'Vases',
    price: '$124.00',
    description:
      'A minimalist ceramic vase featuring a distinctive arch design. The neutral finish complements any decor style and adds a touch of elegance to your home Crafted from high-quality materials, this vase exhibits a lustrous finish that enhances its visual appeal Whether composed of fine ceramic, hand-blown glass, or elegant porcelain, the material’s intrinsic beauty is accentuated through glazing or polishing techniques that lend it a radiant sheen. The surface invites touch as much as sight with textures that range from smooth, glass-like perfection to subtly tactile finishes that evoke a sense of artisanal craftsmanship. Each vase carries the signature of skilled artisans whose hands have ensuring that every curve, contour, and nuance is executed flawlessly. The color palette of this vase is carefully considered to complement a wide array of interior styles. Subtle...',
    specifications: {
      L: '99cm',
      B: '109cm',
      H: '54cm',
      Material: 'Ceramic',
      Style: 'Vintage Classic',
      Durability: '10+ Years',
      Weight: '12.5 Kg',
      Finish: 'Matte Terracotta',
      Usage: 'Indoor Display',
      Polish: 'Glossy Mirror'
    },
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    name: 'Bamboo Serving Tray',
    code: '90234',
    category: 'Serving',
    price: '$78.00',
    description:
      'A minimalist ceramic vase featuring a distinctive arch design. The neutral finish complements any decor style and adds a touch of elegance to your home Crafted from high-quality materials, this vase exhibits a lustrous finish that enhances its visual appeal Whether composed of fine ceramic, hand-blown glass, or elegant porcelain, the material’s intrinsic beauty is accentuated through glazing or polishing techniques that lend it a radiant sheen. The surface invites touch as much as sight with textures that range from smooth, glass-like perfection to subtly tactile finishes that evoke a sense of artisanal craftsmanship. Each vase carries the signature of skilled artisans whose hands have ensuring that every curve, contour, and nuance is executed flawlessly. The color palette of this vase is carefully considered to complement a wide array of interior styles. Subtle...',
    specifications: {
      L: '99cm',
      B: '109cm',
      H: '54cm',
      Material: 'Ceramic',
      Style: 'Vintage Classic',
      Durability: '10+ Years',
      Weight: '12.5 Kg',
      Finish: 'Matte Terracotta',
      Usage: 'Indoor Display',
      Polish: 'Glossy Mirror'
    },
    image: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    name: 'Ceramic Tea Pot',
    code: '90234',
    category: 'Teaware',
    price: '$95.00',
    description:
      'A minimalist ceramic vase featuring a distinctive arch design. The neutral finish complements any decor style and adds a touch of elegance to your home Crafted from high-quality materials, this vase exhibits a lustrous finish that enhances its visual appeal Whether composed of fine ceramic, hand-blown glass, or elegant porcelain, the material’s intrinsic beauty is accentuated through glazing or polishing techniques that lend it a radiant sheen. The surface invites touch as much as sight with textures that range from smooth, glass-like perfection to subtly tactile finishes that evoke a sense of artisanal craftsmanship. Each vase carries the signature of skilled artisans whose hands have ensuring that every curve, contour, and nuance is executed flawlessly. The color palette of this vase is carefully considered to complement a wide array of interior styles. Subtle...',
    specifications: {
      L: '99cm',
      B: '109cm',
      H: '54cm',
      Material: 'Ceramic',
      Style: 'Vintage Classic',
      Durability: '10+ Years',
      Weight: '12.5 Kg',
      Finish: 'Matte Terracotta',
      Usage: 'Indoor Display',
      Polish: 'Glossy Mirror'
    },
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 6,
    name: 'Modernist Table Lamp',
    code: '90234',
    category: 'Lighting',
    price: '$198.00',
    description:
      'A minimalist ceramic vase featuring a distinctive arch design. The neutral finish complements any decor style and adds a touch of elegance to your home Crafted from high-quality materials, this vase exhibits a lustrous finish that enhances its visual appeal Whether composed of fine ceramic, hand-blown glass, or elegant porcelain, the material’s intrinsic beauty is accentuated through glazing or polishing techniques that lend it a radiant sheen. The surface invites touch as much as sight with textures that range from smooth, glass-like perfection to subtly tactile finishes that evoke a sense of artisanal craftsmanship. Each vase carries the signature of skilled artisans whose hands have ensuring that every curve, contour, and nuance is executed flawlessly. The color palette of this vase is carefully considered to complement a wide array of interior styles. Subtle...',
    specifications: {
      L: '99cm',
      B: '109cm',
      H: '54cm',
      Material: 'Ceramic',
      Style: 'Vintage Classic',
      Durability: '10+ Years',
      Weight: '12.5 Kg',
      Finish: 'Matte Terracotta',
      Usage: 'Indoor Display',
      Polish: 'Glossy Mirror'
    },
    image: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 7,
    name: 'Geometric Planter Set',
    code: '90234',
    category: 'Planters',
    price: '$145.00',
    description:
      'A minimalist ceramic vase featuring a distinctive arch design. The neutral finish complements any decor style and adds a touch of elegance to your home Crafted from high-quality materials, this vase exhibits a lustrous finish that enhances its visual appeal Whether composed of fine ceramic, hand-blown glass, or elegant porcelain, the material’s intrinsic beauty is accentuated through glazing or polishing techniques that lend it a radiant sheen. The surface invites touch as much as sight with textures that range from smooth, glass-like perfection to subtly tactile finishes that evoke a sense of artisanal craftsmanship. Each vase carries the signature of skilled artisans whose hands have ensuring that every curve, contour, and nuance is executed flawlessly. The color palette of this vase is carefully considered to complement a wide array of interior styles. Subtle...',
    specifications: {
      L: '99cm',
      B: '109cm',
      H: '54cm',
      Material: 'Ceramic',
      Style: 'Vintage Classic',
      Durability: '10+ Years',
      Weight: '12.5 Kg',
      Finish: 'Matte Terracotta',
      Usage: 'Indoor Display',
      Polish: 'Glossy Mirror'
    },
    image: 'https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 8,
    name: 'Minimalist Fruit Bowl',
    code: '90234',
    category: 'Serving',
    price: '$67.00',
    description:
      'A minimalist ceramic vase featuring a distinctive arch design. The neutral finish complements any decor style and adds a touch of elegance to your home Crafted from high-quality materials, this vase exhibits a lustrous finish that enhances its visual appeal Whether composed of fine ceramic, hand-blown glass, or elegant porcelain, the material’s intrinsic beauty is accentuated through glazing or polishing techniques that lend it a radiant sheen. The surface invites touch as much as sight with textures that range from smooth, glass-like perfection to subtly tactile finishes that evoke a sense of artisanal craftsmanship. Each vase carries the signature of skilled artisans whose hands have ensuring that every curve, contour, and nuance is executed flawlessly. The color palette of this vase is carefully considered to complement a wide array of interior styles. Subtle...',
    specifications: {
      L: '99cm',
      B: '109cm',
      H: '54cm',
      Material: 'Ceramic',
      Style: 'Vintage Classic',
      Durability: '10+ Years',
      Weight: '12.5 Kg',
      Finish: 'Matte Terracotta',
      Usage: 'Indoor Display',
      Polish: 'Glossy Mirror'
    },
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

  {/* main content */}
      <main className={s.mainContent}>
        <div className={s.productsList}>
          {products.map((product, index) => (
            <article key={product.id} className={`${s.productCard} ${index % 2 === 0 ? s.imageLeft : s.imageRight}`}>
              {/* Product Image with Active Tick */}
              <div className={s.productImageContainer}>
                <span className={s.activeTick}></span>
                <img src={product.image} alt={product.name} className={s.productImage} />
              </div>

              {/* Product Info */}
              <div className={s.productInfo}>
                <div className={s.productHeader}>
                  <div>
                    <h2 className={s.productName}>{product.name}</h2>
                    <span className={s.productCode}>#{product.code}</span>
                  </div>
                  <button className={s.viewBtn}>View Product</button>
                </div>

                <div className={s.productSpecs}>
                  <strong>Specifications:</strong>
                  <div className={s.specGrid}>
                    {/* Show L, B, H in one line */}
                    {product.specifications.L && product.specifications.B && product.specifications.H && (
                      <div className={s.specItem}>
                        {`L:${product.specifications.L} B:${product.specifications.B} H:${product.specifications.H}`}
                      </div>
                    )}

                    {/* Render all other specs except L, B, H */}
                    {Object.entries(product.specifications)
                      .filter(([label]) => !['L', 'B', 'H'].includes(label))
                      .map(([label, value], idx) => (
                        <div key={idx} className={s.specItem}>
                          <span className={s.specLabel}>{label}:</span> {value}
                        </div>
                      ))}
                  </div>
                </div>

                <div className={s.productDescription}>
                  <strong>Description:</strong>
                  <p>{product.description}</p>
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
