import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <h2>Bastidores, estratégia e crescimento real no digital</h2>
          <p>
            Sou Jhenifer Albuquerque e trabalho nos bastidores do digital,
            ajudando negócios a se organizarem, se posicionarem e crescerem com
            mais clareza.
          </p>
          <p>
            Uno estratégia de conteúdo, tráfego pago e organização de processos
            para transformar presença online em resultado e construir uma
            comunicação mais forte, profissional e conectada com vendas.
          </p>
          <p>
            Acredito em um digital com direção, constância e propósito — onde
            cada ação tenha intenção e contribua para o crescimento real da
            marca.
          </p>

          <div className="highlights">
            <div className="highlight">
              <div className="highlight-icon">✓</div>
              <div className="highlight-text">
                <strong>Estratégia:</strong>
                Visão clara de como tráfego, conteúdo e comunicação se conectam
              </div>
            </div>
            <div className="highlight">
              <div className="highlight-icon orange">✓</div>
              <div className="highlight-text">
                <strong>Organização:</strong>
                Estruturas que funcionam e escalas com o crescimento
              </div>
            </div>
            <div className="highlight">
              <div className="highlight-icon purple">✓</div>
              <div className="highlight-text">
                <strong>Resultados:</strong>
                Foco em métricas, dados e crescimento real
              </div>
            </div>
          </div>

          <div className="mt-4">
            <a
              href="/portfolio-apresentacao.pdf"
              download
              className="btn-primary"
            >
              Baixar Portfólio Completo
            </a>
          </div>
        </div>
        <div className="journey">
          <h3 className="journey-title">Minha Jornada</h3>
          <div className="journey-items">
            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-dot"></div>
                <div className="journey-line"></div>
              </div>

              <div className="journey-content">
                <p className="journey-step-title">Aprendendo</p>
                <p className="journey-step-description">
                  Estudando tráfego pago e estratégia de conteúdo
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-dot journey-dot-practicing"></div>
                <div className="journey-line journey-line-practicing"></div>
              </div>

              <div className="journey-content">
                <p className="journey-step-title">Praticando</p>
                <p className="journey-step-description">
                  Desenvolvendo campanhas e estratégias em operações reais
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-dot journey-dot-growing"></div>
              </div>

              <div className="journey-content">
                <p className="journey-step-title">Crescendo</p>
                <p className="journey-step-description">
                  Construindo expertise, confiança e resultados reais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
