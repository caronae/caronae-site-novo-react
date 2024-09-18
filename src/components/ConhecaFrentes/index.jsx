import './styles.css';
import boycoding from '../../assets/imagem-azul-desenvolvimento.png';
import girl from '../../assets/imagem-verde-dados.png';
import telefone from '../../assets/imagem-vermelho-comunicacao.png';

export default function ConhecaFrentes() {
  return (
    <div className="conhecaFrentes">
      <div className="textoPrincipal_bluebox">
        <div className="texto">
          <h2 className="tituloPrincipal">
            Conheça as frentes <br />
            do Caronaê
          </h2>
          <p>
            Os membros do projeto de extensão Caronaê atuam <br/>
            em três frentes principais: desenvolvimento,
            comunicação e dados. Conheça elas ao lado.
          </p>
        </div>
        <div className="caixaAzul">
          <div className="textoAzul">
            <h2>Desenvolvimento</h2>
            <p>
              A equipe de desenvolvimento trabalha para garantir um
              aplicativo de qualidade e com uma experiência de
              usuário agradável.
            </p>
          </div>
          <img src={boycoding} alt="boy coding" />
        </div>
      </div>
      <div className="redBox_greenBox">
        <div className="redBox">
          <div className="textoVermelho">
            <h2>Comunicação</h2>
            <p>
              Já a equipe de comunicação se dedica a disseminar
              informações sobre o projeto e conscientizar a população
              sobre a importância das caronas para a
              sustentabilidade.
            </p>
          </div>
          <img src={telefone} alt="Telefone" />
        </div>

        <div className="greenBox">
          <div className="textoVerde">
            <h2>Dados</h2>
            <p>
              Por fim, a equipe de dados é responsável por coletar e
              analisar informações relevantes para aprimorar o
              projeto e torná-lo cada vez mais eficiente.
            </p>
          </div>
          <img src={girl} alt="Girl" className="fotoVerde" />
        </div>
      </div>
    </div>
  );
}
