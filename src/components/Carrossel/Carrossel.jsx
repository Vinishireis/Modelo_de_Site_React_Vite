import { useState, useEffect } from 'react'
import './Carrossel.css'

function Carrossel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      image: './src/assets/images/carousel1.jpg',
      title: 'Bem-vindo ao Nosso Site',
      description: 'Descubra tudo o que temos a oferecer'
    },
    {
      image: './src/assets/images/carousel2.jpg',
      title: 'Produtos Incríveis',
      description: 'Conheça nossa linha exclusiva'
    },
    {
      image: './src/assets/images/carousel3.jpg',
      title: 'Promoções Especiais',
      description: 'Aproveite nossas ofertas limitadas'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="carrossel">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <button className="slide-button">Saiba Mais</button>
          </div>
        </div>
      ))}
      <div className="carrossel-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`control ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carrossel