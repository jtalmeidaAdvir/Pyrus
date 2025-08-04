
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };
  return (
    <div className="App">
      {/* SECÇÃO 1: MENU PRINCIPAL */}
      <div className="secção">
        {/* NAVEGAÇÃO */}
        <nav className="menu-linguas">
          <div className="menu">
            <a href="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Início</a>
            <a href="#missão" onClick={(e) => {e.preventDefault(); scrollToSection('missão')}}>Missão</a>
            <a href="#foco" onClick={(e) => {e.preventDefault(); scrollToSection('foco')}}>Foco</a>
            <a href="#form" onClick={(e) => {e.preventDefault(); scrollToSection('form')}}>Contacte-nos</a>
          </div>
          {/* LINGUAS */}
          <div className="linguas">
            <select className="lingua-select" defaultValue="PT">
              <option value="PT">PT</option>
              <option value="EN">EN</option>
              <option value="ES">ES</option>
            </select>
          </div>
        </nav>
        {/* LOGO + HEADLINES */}
        <div className="logotipo">
          <img
            src="img/Pyrus_logo.png"
            alt="Logotipo da Pyrus"
            className="logotipo-img"
            width="200px"
          />
          <h2>
            Soluções <br />
            Imobiliárias
          </h2>
          <h3>
            Personalizando o seu <br />
            investimento
          </h3>
          <a href="#form" onClick={(e) => {e.preventDefault(); scrollToSection('form')}}> Contacte-nos</a>
        </div>
      </div>

      {/* SECÇÃO 2: MISSÃO */}
      <div id="missão" className="secção missão">
        <div className="container-missão">
          <div className="missão-texto">
            <h2>Missão</h2>
            <hr />
            <h3>PYRUS - Imobiliário com Alcance Internacional</h3>
            <p>
              Com sólida experiência profissional e profundo conhecimento dos
              mercados ibero-americanos e europeus, a Pyrus atua na identificação
              e desenvolvimento de oportunidades imobiliárias com alto potencial
              de valorização. Analisamos cada ativo com visão estratégica e
              multifatorial — viabilidade, aquisição, promoção, construção e
              comercialização — e entregamos soluções ajustadas a investidores,
              fundos e parceiros com ambição global.
            </p>
            <h3>Equipa Experiente</h3>
            <p>
              A equipa da PYRUS possui uma sólida experiência no mercado
              imobiliário, adquirida ao longo de anos de atuação em projetos de
              diferentes escalas e complexidades.
            </p>

            <p id="MissãoFrase">
              "Visão global, execução precisa. Transformamos ativos imobiliários
              em valor real."
            </p>
          </div>
          <div className="missão-slider-img-grid">
            <div className="missão-slider-img">
              <img src="img/Pyrus_logo_branco.png" alt="Logotipo da Pyrus" />
              <h2>
                Soluções <br />
                Imobiliárias
              </h2>
            </div>
          </div>
          <div className="missão-info">
            <div className="missão-info-extra">
              <h3>40+</h3>
              <p>
                Anos de <br />
                experiência
              </p>
            </div>
          
            <div className="missão-info-extra">
              <h3>3</h3>
              <p>Países</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECÇÃO 3 - O NOSSO FOCO */}
      <div id="foco" className="foco">
        <div className="container-foco">
          <h2>O Nosso Foco</h2>
          <div className="foco-main">
            <div className="foco-main-block foco-main-1" onClick={() => toggleSection('projeto')}>
              <img className="foco-main-img" src="img/Foco/foco-projeto-main.png" alt="Icon - Aquisição e Desenvolvimento de Projetos" />
              
              <div className="foco-main-block-text">
                <h3>Aquisição e Desenvolvimento de Projetos</h3>
                <img 
                  src="img/Foco/Down Arrow.svg" 
                  alt="mais" 
                  className={`arrow ${activeSection === 'projeto' ? 'rotated' : ''}`}
                />
              </div>
            </div>
           
            <div className="foco-main-block foco-main-2" onClick={() => toggleSection('transacoes')}>
              <img className="foco-main-img" src="img/Foco/foco-transações-main.png" alt="Icon - Apoio em Negociações e Transações" />
              
              <div className="foco-main-block-text">
                <h3>Apoio em Negociações e Transações</h3>
                <img 
                  src="img/Foco/Down Arrow.svg" 
                  alt="mais" 
                  className={`arrow ${activeSection === 'transacoes' ? 'rotated' : ''}`}
                />
              </div>
            </div>

            <div className="foco-main-block foco-main-3" onClick={() => toggleSection('investimentos')}>
              <img className="foco-main-img" src="img/Foco/foco-investimentos-main.png" alt="Icon - Gestão Personalizada de Investimentos" />
              
              <div className="foco-main-block-text">
                <h3>Gestão Personalizada de Investimentos</h3>
                <img 
                  src="img/Foco/Down Arrow.svg" 
                  alt="mais" 
                  className={`arrow ${activeSection === 'investimentos' ? 'rotated' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>

        {activeSection === 'projeto' && (
          <div className="foco-descr foco-descr-projeto">
            <ul>
            <li className="list-style">
              <img src="img/Foco/foco-projeto-1.png" alt="logo1" />
              <div>
                <h4>Identificação de Oportunidades</h4>
                <p>
                  Localização de imóveis e ativos com elevado potencial de
                  valorização, reconversão ou desenvolvimento, alinhados com os
                  objetivos do investidor.
                </p>
              </div>
            </li>
            <li className="list-style">
              <img src="img/Foco/foco-projeto-2.png" alt="logo2" />
              <div>
                <h4>Estudos de Viabilidade e Enquadramento</h4>
                <p>
                  Análise técnica, jurídica e financeira dos ativos, incluindo
                  cenários de uso, licenciamento e retorno potencial.
                </p>
              </div>
            </li>
            <li className="list-style">
              <img src="img/Foco/foco-projeto-3.png" alt="logo3" />
              <div>
                <h4>Estruturação do Projeto</h4>
                <p>
                  Definição do conceito, modelo de negócio e estratégia de
                  desenvolvimento para cada ativo ou empreendimento.
                </p>
              </div>
            </li>
            <li className="list-style">
              <img src="img/Foco/foco-projeto-4.png" alt="logo4" />
              <div>
                <h4>Planeamento de Execução</h4>
                <p>
                  Organização das fases do projeto: aquisição, contratação de
                  equipas, orçamentos, cronogramas e estratégias de saída.
                </p>
              </div>
            </li>
          </ul>
          </div>
        )}

        {activeSection === 'transacoes' && (
          <div className="foco-descr foco-descr-transações">
          <ul>
            <li className="list-style">
              <img src="img/Foco/foco-transações-1.png" alt="logo1" />
              <div>
                <h4>Representação Estratégica</h4>
                <p>
                  Atuação em nome de investidores ou proprietários para defender
                  interesses em transações imobiliárias ou empresariais.
                </p>
              </div>
            </li>
            <li className="list-style">
              <img src="img/Foco/foco-transações-2.png" alt="logo2" />
              <div>
                <h4>Preparação de Ativos para Transação</h4>
                <p>
                  Análise técnica, jurídica e financeira dos ativos, incluindo
                  cenários de uso, licenciamento e retorno potencial.
                </p>
              </div>
            </li>
            <li className="list-style">
              <img src="img/Foco/foco-transações-3.png" alt="logo3" />
              <div>
                <h4>Intermediação Técnica</h4>
                <p>
                  Suporte especializado em negociações complexas envolvendo ativos
                  com particularidades legais ou operacionais.
                </p>
              </div>
            </li>
            <li className="list-style">
              <img src="img/Foco/foco-transações-4.png" alt="logo4" />
              <div>
                <h4>Coordenação de Due Diligence</h4>
                <p>
                  Gestão de processos de análise técnica, jurídica e financeira para
                  garantir decisões informadas e seguras.
                </p>
              </div>
            </li>
          </ul>
          </div>
        )}

        {activeSection === 'investimentos' && (
          <div className="foco-descr foco-descr-investimentos">
          <ul>
            <li className="list-style">
              <img src="img/Foco/foco-investimentos-1.png" alt="logo1" />
              <div>
                <h4>Modelos de Investimento à Medida</h4>
                <p>
                  Estratégias desenhadas segundo o perfil e os objetivos de cada
                  investidor, com acompanhamento próximo.
                </p>
              </div>
            </li>
            <li className="list-style">
              <img src="img/Foco/foco-investimentos-2.png" alt="logo2" />
              <div>
                <h4>Gestão de Portfólio Imobiliário</h4>
                <p>
                  Acompanhamento contínuo de ativos e projetos, com relatórios de
                  progresso e apoio na tomada de decisão.
                </p>
              </div>
            </li>
            <li className="list-style">
              <img src="img/Foco/foco-investimentos-3.png" alt="logo3" />
              <div>
                <h4>Monitorização de Mercados</h4>
                <p>
                  Atualização constante sobre tendências e contextos relevantes a
                  nível local e internacional.
                </p>
              </div>
            </li>
            <li className="list-style">
              <img src="img/Foco/foco-investimentos-4.png" alt="logo4" />
              <div>
                <h4>Suporte Contínuo e Confidencialidade</h4>
                <p>
                  Relação próxima e estratégica com cada cliente, garantindo
                  discrição e alinhamento de longo prazo.
                </p>
              </div>
            </li>
          </ul>
          </div>
        )}
      </div>

      {/* FORMULÁRIO */}
      <div id="form" className="secção formulário">
        <div className="container-formulário">
          <h2>Contacte-nos</h2>
          <h3>Faça Uma Solicitação</h3>

          <form action="action_page.php" method="POST" className="form-contacto">
            
            <div className="form-group">
              <label htmlFor="solicitação">Tipo de Solicitação:</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" name="vender-imóvel" value="1" onClick={(e) => {
                    const checkboxes = document.querySelectorAll('input[type="checkbox"][name^="vender-imóvel"], input[type="checkbox"][name^="parceiro-projeto"], input[type="checkbox"][name^="comprar-imóvel"], input[type="checkbox"][name^="outro"]');
                    checkboxes.forEach(cb => {
                      if (cb !== e.target) (cb as HTMLInputElement).checked = false;
                    });
                  }} />
                  Quero vender um imóvel
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="parceiro-projeto" value="2" onClick={(e) => {
                    const checkboxes = document.querySelectorAll('input[type="checkbox"][name^="vender-imóvel"], input[type="checkbox"][name^="parceiro-projeto"], input[type="checkbox"][name^="comprar-imóvel"], input[type="checkbox"][name^="outro"]');
                    checkboxes.forEach(cb => {
                      if (cb !== e.target) (cb as HTMLInputElement).checked = false;
                    });
                  }} />
                  Procuro um parceiro para o desenvolvimento de um projeto
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="comprar-imóvel" value="3" onClick={(e) => {
                    const checkboxes = document.querySelectorAll('input[type="checkbox"][name^="vender-imóvel"], input[type="checkbox"][name^="parceiro-projeto"], input[type="checkbox"][name^="comprar-imóvel"], input[type="checkbox"][name^="outro"]');
                    checkboxes.forEach(cb => {
                      if (cb !== e.target) (cb as HTMLInputElement).checked = false;
                    });
                  }} />
                  Quero comprar um imóvel
                </label>
                <div className="outro-option">
                  <label className="checkbox-label">
                    <input type="checkbox" name="outro" value="4" onClick={(e) => {
                      const checkboxes = document.querySelectorAll('input[type="checkbox"][name^="vender-imóvel"], input[type="checkbox"][name^="parceiro-projeto"], input[type="checkbox"][name^="comprar-imóvel"], input[type="checkbox"][name^="outro"]');
                      checkboxes.forEach(cb => {
                        if (cb !== e.target) (cb as HTMLInputElement).checked = false;
                      });
                    }} />
                    Outro
                  </label>
                  <input type="text" id="outro-texto" placeholder="Introduza texto" className="outro-input" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="assunto">Assunto:</label>
              <input type="text" id="assunto" name="assunto" placeholder="Insira aqui o seu texto" required />
            </div>

            <div className="form-group">
              <label htmlFor="descrição">Descrição:</label>
              <textarea id="descrição" name="descrição" placeholder="Insira aqui o seu texto" required rows={4}></textarea>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" id="contacto" name="contacto" />
                Marcação de Contacto (opcional)
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="reunião-data">Sugestão de Data para reunião/visita:</label>
              <input type="date" id="reunião-data" name="reunião-data" />
            </div>

            <div className="form-group">
              <label htmlFor="reunião-hora">Sugestão de Hora para reunião/visita:</label>
              <input type="time" id="reunião-hora" name="reunião-hora" />
            </div>

            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" placeholder="Nome" required />
            </div>

            <div className="form-group">
              <label htmlFor="telemóvel">Telemóvel:</label>
              <input type="tel" id="telemóvel" name="telemóvel" placeholder="Telemóvel" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="contacto-preferência">Deseja ser contactado por:</label>
              <select name="contacto-preferência" id="contacto-preferência">
                <option value="email">E-mail</option>
                <option value="telemóvel">Telemóvel</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>

            <div className="form-group rgpd-group">
              <label className="checkbox-label">
                <input type="checkbox" id="RGPD" name="RGPD" required />
                Autorizo a recolha e o tratamento dos meus dados pessoais para os fins indicados, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).
              </label>
            </div>

            <div className="form-group">
              <button type="submit" className="submit-btn">Enviar Solicitação</button>
            </div>
          </form>
        </div>
      </div>

      {/* RODAPÉ */}
      <div className="rodapé">
        <div className="rodapé-contactos">
          <h4>Contactos</h4>
          <p>Rua Bernardo Sequeira 213 <br />4715-671 Braga, Portugal</p>
          <p>+351253897123 <br />Chamada para a rede fixa nacional</p>
          <p>pyrus@pyrus.pt</p>
        </div>
        <a href="#"> Política de Privacidade</a>
        <a href="#"> Cookies</a>
        <div className="rodapé-logo">
          <img src="img/Pyrus_logo_branco.png" alt="Logo da Pyrus" width="200px" />
          <p>© Pyrus 2025</p>
        </div>
      </div>
    </div>
  );
}

export default App;
