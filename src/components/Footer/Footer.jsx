import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Sobre Nós</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="footer-section">
                    <h3>Contato</h3>
                    <p>Email: contato@meusite.com</p>
                    <p>Telefone: (00) 1234-5678</p>
                </div>
                <div className="footer-section">
                    <h3>Redes Sociais</h3>
                    <div className="social-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer