import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Entre em Contato</h2>
          <p>
            Vamos conversar sobre como posso ajudar seu negócio a crescer no
            digital
          </p>
        </div>
        <div className="contact-grid">
          <a
            href="https://wa.me/5511960314542"
            aria-label="Entrar em contato pelo WhatsApp"
          >
            <div className="contact-card">
              <div className="contact-icon">
                <FaWhatsapp color="#25D366" size={32} />
              </div>
            </div>
          </a>

          <a
            href="https://www.instagram.com/jheniferalbuquerquesant?stkn=enFyeHVjOWxyd2tu"
            aria-label="Visitar Instagram"
          >
            <div className="contact-card">
              <div className="contact-icon">
                <FaInstagram color="#E4405F" size={32} />
              </div>
            </div>
          </a>

          <a
            href="mailto:jheniferalbuquerquevoz@gmail.com"
            aria-label="Enviar e-mail"
          >
            <div className="contact-card">
              <div className="contact-icon">
                <SiGmail size={32} color="#EA4335" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
