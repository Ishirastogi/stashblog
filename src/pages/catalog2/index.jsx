import React from "react";
import s from "./styles.module.scss";
import Footer from "layouts/home/footer/index.jsx";

const CatalogPage = () => {
  return (
    <div>
      {/* Header */}
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.headerTop}>
            {/* <div className={s.logoSection}>
              <img
                src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=50&h=50"
                alt="Molblgado Export"
                className={s.logo}
              />
              <div className={s.companyInfo}>
                <h1>Molblgado Export</h1>
                <p>Premium Home Decor Collection</p>
              </div>
            </div> */}
            {/* <nav className={s.mainNav}>
              <a href="#" className={s.navLink}>Home</a>
              <a href="#" className={s.navLink}>Products</a>
              <a href="#" className={s.navLink}>About</a>
              <a href="#" className={s.navLink}>Contact</a>
            </nav> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={s.mainContent}>
        <div className={s.container}>
          <div className={s.catalogHeader}>
            <h2>Product Catalog</h2>
            <p>
              Discover our premium collection of home decor and lifestyle products
            </p>
          </div>

          {/* Product Grid */}
          <div className={s.productGrid}>
            {/* Product 1 */}
            <div className={s.productCard}>
              <div className={s.productImage}>
                <img
                  src="https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
                  alt="Ceramic Vase"
                />
              </div>
              <div className={s.productInfo}>
                <h3>Ceramic Vase</h3>
                <div className={s.productDetails}>
                  <p><strong>Material:</strong> Premium Ceramic</p>
                  <p><strong>Dimensions:</strong> 25cm H x 15cm W</p>
                  <p><strong>Color:</strong> Matte White</p>
                  <p><strong>Weight:</strong> 0.8kg</p>
                  <p><strong>Style:</strong> Contemporary</p>
                </div>
                <div className={s.productCode}>Code: CV-001</div>
              </div>
            </div>

            {/* Product 2 */}
            <div className={s.productCard}>
              <div className={s.productImage}>
                <img
                  src="https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
                  alt="Glass Terrarium"
                />
              </div>
              <div className={s.productInfo}>
                <h3>Glass Terrarium</h3>
                <div className={s.productDetails}>
                  <p><strong>Material:</strong> Borosilicate Glass</p>
                  <p><strong>Dimensions:</strong> 20cm H x 18cm W</p>
                  <p><strong>Color:</strong> Clear Glass</p>
                  <p><strong>Weight:</strong> 0.5kg</p>
                  <p><strong>Style:</strong> Geometric</p>
                </div>
                <div className={s.productCode}>Code: GT-002</div>
              </div>
            </div>

            {/* Product 3 */}
            <div className={s.productCard}>
              <div className={s.productImage}>
                <img
                  src="https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
                  alt="Wooden Planter"
                />
              </div>
              <div className={s.productInfo}>
                <h3>Wooden Planter</h3>
                <div className={s.productDetails}>
                  <p><strong>Material:</strong> Acacia Wood</p>
                  <p><strong>Dimensions:</strong> 30cm H x 25cm W</p>
                  <p><strong>Color:</strong> Natural Wood</p>
                  <p><strong>Weight:</strong> 1.2kg</p>
                  <p><strong>Style:</strong> Rustic Modern</p>
                </div>
                <div className={s.productCode}>Code: WP-003</div>
              </div>
            </div>

            {/* Product 4 */}
            <div className={s.productCard}>
              <div className={s.productImage}>
                <img
                  src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
                  alt="Marble Candle Holder"
                />
              </div>
              <div className={s.productInfo}>
                <h3>Marble Candle Holder</h3>
                <div className={s.productDetails}>
                  <p><strong>Material:</strong> Carrara Marble</p>
                  <p><strong>Dimensions:</strong> 12cm H x 10cm W</p>
                  <p><strong>Color:</strong> White/Grey Veined</p>
                  <p><strong>Weight:</strong> 1.5kg</p>
                  <p><strong>Style:</strong> Luxury Modern</p>
                </div>
                <div className={s.productCode}>Code: MC-004</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
     <Footer/>
    </div>
  );
};

export default CatalogPage;
