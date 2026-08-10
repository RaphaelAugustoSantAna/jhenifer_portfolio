import "./Services.css";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="section-title">
          <h2>Meus Serviços</h2>
          <p>
            Soluções estratégicas para impulsionar sua presença digital e gerar
            resultados reais
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon service-icon-traffic">⚡</div>
            <h3>Gestão de Tráfego Pago</h3>
            <p>
              Estruturo e otimizo campanhas em Google Ads e Meta Ads para gerar
              resultados tangíveis com planejamento estratégico e monitoramento
              contínuo.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon service-icon-content">💡</div>
            <h3>Estratégia de Conteúdo</h3>
            <p>
              Organizo e estruturo conteúdo para redes sociais com planejamento
              estratégico, calendário editorial e orientações para execução
              consistente.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon service-icon-video">🎬</div>
            <h3>Edição de Vídeos</h3>
            <p>
              Crio vídeos otimizados para redes sociais com roteirização, edição
              profissional, trilha sonora e adaptação para diferentes
              plataformas.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon service-icon-profile">📍</div>
            <h3>Organização de Perfis</h3>
            <p>
              Otimizo perfis em Instagram, Facebook, WhatsApp Business e Google
              Meu Negócio para uma presença profissional e bem estruturada.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon service-icon-landing">🌐</div>
            <h3>Landing Pages</h3>
            <p>
              Desenvolvo landing pages responsivas focadas em conversão, com
              design personalizado e integração com ferramentas de marketing.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon service-icon-reports">📊</div>
            <h3>Relatórios & Análise</h3>
            <p>
              Crio relatórios profissionais com análise de dados, métricas de
              desempenho e recomendações para otimização contínua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
