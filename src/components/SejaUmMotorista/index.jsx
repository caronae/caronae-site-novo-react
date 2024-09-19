import { Link } from 'react-router-dom';
import imgBusStop from '../../assets/bus-stop.svg';
import iconCar from '../../assets/icon-car.svg';
import iconPassageiro from '../../assets/icon-passageiro.svg';
import imgMotorista from '../../assets/img-motorista.svg';
import styles from './SejaUmMotorista.module.css';

const SejaUmMotorista = () => {
  return (
      <section className={ styles.sejaUmMotorista }>
        <Cards />
        <Content />
      </section>
  );
};

const Cards = () => {
  return (
    <div className={ styles.cards }>

      <div className={ styles.cardsRow }>
        <ImageTextCard backgroundColor="rgba(43, 56, 138, 1)"
                       imgSrc={ imgMotorista } />
        <IconCard backgroundColor="rgba(235, 61, 56, 1)"
                  imgSrc={ iconCar } />
      </div>

      <div className={ styles.cardsRow }>
        <IconCard backgroundColor="rgba(237, 128, 36, 1)"
                  imgSrc={ iconPassageiro } />
        <TextImageCard backgroundColor="rgba(110, 54, 31, 1)"
                       imgSrc={ imgBusStop } />
      </div>

    </div>
  );
};

const Content = () => {
  return (
    <div className={ styles.content }>
      <h1>Viaje com mais vantagens</h1>
      <h2>Seja um motorista ou passageiro do Caronaê!</h2>
      <p>
           Se você é motorista, pode economizar dinheiro dividindo os custos
           da viagem e ainda contribuir para um ambiente mais sustentável.
      </p>
      <p>
           Se você é passageiro, pode economizar dinheiro com as viagens
           compartilhadas e, ao mesmo tempo, ter mais flexibilidade,
           segurança e comodidade, escolhendo a melhor rota e horário
           para sua viagem.
      </p>
      <Link style={{ textDecoration: 'none' }} to="/faq" >
        <button>Como me torno um motorista do Caronaê?</button>
      </Link>
    </div>
  );
};

const IconCard = ({ backgroundColor, imgSrc }) => {
  return (
    <div className={ styles.iconCard }
         style={{ backgroundColor: backgroundColor }}>
    <img src={ imgSrc } />
    </div>
  );
};

const ImageTextCard = ({ backgroundColor, imgSrc }) => {
  return (
    <div className={ styles.imageTextCard }
         style={{ backgroundColor: backgroundColor }}>
      <img src={ imgSrc } />
      <h1>Motorista</h1>
    </div>
  );
};

const TextImageCard = ({ backgroundColor, imgSrc }) => {
  return (
    <div className={ styles.textImageCard }
         style={{ backgroundColor: backgroundColor }}>
    <h1>Passageiro</h1>
    <img src={ imgSrc } />
    </div>
  );
};

export default SejaUmMotorista;
