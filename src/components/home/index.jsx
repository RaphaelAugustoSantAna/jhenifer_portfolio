// import NavBar from "../navBar";
import "./home.css";

function Home() {
  return (
    <div className="hero">
      <div className="container">
        {/* <NavBar /> */}
        <div className="hero-content">
          <h1>Olá, sou Jhenifer</h1>
          <p className="subtitle">
            Trabalho nos bastidores do digital para estruturar, organizar e
            fazer crescer negócios
          </p>
          <p>
            Uno estratégia de conteúdo, tráfego pago e organização de processos
            para transformar presença online em resultado real e construir uma
            comunicação mais forte, profissional e conectada com vendas.
          </p>
          <div className="hero-image">
            <img src="/imagens/foto_perfil.jpg" alt="Jhenifer Albuquerque" />
          </div>
          <div className="hero-buttons">
            <a href="https://wa.me/5511960314542">
              <button className="btn-primary">Solicitar Orçamento</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
