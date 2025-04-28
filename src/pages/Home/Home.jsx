import Carrossel from '../../components/Carrossel/Carrossel'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Carrossel />
      
      <section className="featured-products">
        <h2>Produtos em Destaque</h2>
        <div className="products-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="product-card">
              <img src="./src/assets/images/placeholder.jpg" alt={`Produto ${item}`} />
              <h3>Produto {item}</h3>
              <p>Descrição breve do produto {item}</p>
              <button>Ver Detalhes</button>
            </div>
          ))}
        </div>
      </section>
      
      <section className="about-section">
        <div className="about-content">
          <h2>Sobre Nós</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
            rhoncus ut eleifend nibh porttitor.
          </p>
          <p>
            Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl 
            tempor. Suspendisse dictum feugiat nisl ut dapibus.
          </p>
        </div>
        <div className="about-image">
          <img src="./src/assets/images/placeholder.jpg" alt="Sobre Nós" />
        </div>
      </section>
    </div>
  )
}

export default Home