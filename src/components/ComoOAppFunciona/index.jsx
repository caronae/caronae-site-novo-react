import img from '../../assets/como-o-app-funciona.png';
import styles from './ComoOAppFunciona.module.css';

const ComoOAppFunciona = () => {
  return (
    <div className={ styles.comoOAppFunciona }>

      <div className={ styles.listContainer }>
        <h1>Como o app funciona?</h1>
        <ol>
          <li>
            <h2>Baixe o aplicativo</h2>
            <p>
              Baixe o aplicativo Caronaê na loja de aplicativos do seu
              dispositivo móvel (disponível para iOS e Android);
            </p>
          </li>
          <li>
            <h2>Faça seu cadastro</h2>
            <p>
              Faça o seu cadastro no aplicativo, seja como motorista ou
              passageiro, preenchendo suas informações de contato;
            </p>
          </li>
          <li>
            <h2>Peça ou crie uma carona</h2>
            <p>
              Para pedir uma carona, insira o ponto de partida e destino e o
              app sugere caronas. Para motoristas, defina o trajeto, horários
              e combine local e horário com o passageiro.
            </p>
          </li>
        </ol>
      </div>

      <img src={ img } />

    </div>
  );
};

export default ComoOAppFunciona;
