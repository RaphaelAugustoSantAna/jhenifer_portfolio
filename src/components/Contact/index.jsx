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
          <a href="https://wa.me/5511960314542">
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>WhatsApp</h3>
            </div>
          </a>

          <a href="https://www.instagram.com/jheniferalbuquerquesant?stkn=enFyeHVjOWxyd2tu">
            <div className="contact-card">
              <div className="contact-icon">📸</div>
              <h3>Instagram</h3>
            </div>
          </a>

          <a href="mailto:jheniferalbuquerquevoz@gmail.com">
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
