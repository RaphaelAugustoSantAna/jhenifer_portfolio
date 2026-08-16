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
              href="/Portfólio_Jhenifer_Albuquerque.pdf"
              download
              className="btn-primary"
            >
              Baixar Portfólio Completo
            </a>
          </div>
        </div>
        <div className="journey"
         
        >
          <h3 className="journey-title">Minha Jornada</h3>
          <div style="display: flex; flex-direction: column; gap: 30px">
            <div style="display: flex; gap: 20px">
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
              >
                <div
                  style="
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: #2563eb;
                    margin-top: 8px;
                  "
                ></div>
                <div
                  style="
                    width: 2px;
                    height: 50px;
                    background: linear-gradient(180deg, #2563eb, #f97316);
                  "
                ></div>
              </div>
              <div>
                <p style="font-weight: 600; color: #1f2937; margin-bottom: 5px">
                  Aprendendo
                </p>
                <p style="color: #6b7280; font-size: 0.95rem">
                  Estudando tráfego pago e estratégia de conteúdo
                </p>
              </div>
            </div>
            <div style="display: flex; gap: 20px">
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
              >
                <div
                  style="
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: #f97316;
                    margin-top: 8px;
                  "
                ></div>
                <div
                  style="
                    width: 2px;
                    height: 50px;
                    background: linear-gradient(180deg, #f97316, #9333ea);
                  "
                ></div>
              </div>
              <div>
                <p style="font-weight: 600; color: #1f2937; margin-bottom: 5px">
                  Praticando
                </p>
                <p style="color: #6b7280; font-size: 0.95rem">
                  Desenvolvendo campanhas e estratégias em operações reais
                </p>
              </div>
            </div>
            <div style="display: flex; gap: 20px">
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
              >
                <div
                  style="
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: #9333ea;
                    margin-top: 8px;
                  "
                ></div>
              </div>
              <div>
                <p style="font-weight: 600; color: #1f2937; margin-bottom: 5px">
                  Crescendo
                </p>
                <p style="color: #6b7280; font-size: 0.95rem">
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
