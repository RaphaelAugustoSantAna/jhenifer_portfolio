import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
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
        </div>
        <div className="hero-image">
          <img src="/imagens/foto_perfil.jpg" alt="Jhenifer Albuquerque" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
