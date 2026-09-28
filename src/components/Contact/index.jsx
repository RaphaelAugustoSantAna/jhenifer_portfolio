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
          <div className="contact-card">
            <div className="contact-icon">📸</div>
            <h3>Instagram</h3>
            <a href="https://instagram.com"></a>
          </div>
          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
          </div>
          <div className="contact-card">
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>
              <a href="https://linkedin.com"></a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

// <!-- Contact Section -->
//     <section className="contact" id="contact">
//       <div className="container">
//         <div className="section-title">
//           <h2>Entre em Contato</h2>
//           <p>
//             Vamos conversar sobre como posso ajudar seu negócio a crescer no
//             digital
//           </p>
//         </div>
//         <div className="contact-grid">
//           <a href="https://wa.me/5511960314542"
//             style="text-decoration: none; color: inherit;">
//             <div className="contact-card">
//             <div className="contact-icon">📱</div>
//             <h3>WhatsApp</h3>
//           </div></a>
//           <div className="contact-card">
//             <div className="contact-icon">📸</div>
//             <h3>Instagram</h3>
//             <a href="https://instagram.com"></a>
//           </div>
//           <div className="contact-card">
//             <div className="contact-icon">✉️</div>
//             <h3>Email</h3>
//             <!-- <p>jheniferalbuquerquevoz@gmail.com</p> -->
//           </div>
//           <div className="contact-card">
//             <div className="contact-icon">💼</div>
//             <h3>LinkedIn</h3>
//             <p><a href="https://linkedin.com"></a></p>
//           </div>
//         </div>
//       </div>
//     </section>
