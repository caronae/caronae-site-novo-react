import appleLogo from '../../assets/apple_logo.svg';
import iphoneFront from '../../assets/iphone_front.png';
import iphoneSide from '../../assets/iphone_side.png';
import jeepIconImg from '../../assets/jeep-icon.svg';
import leafIconImg from '../../assets/leaf_white.svg';
import peopleIconImg from '../../assets/people_blue.svg';
import playStoreLogo from '../../assets/play_store_logo.svg';
import shieldIconImg from '../../assets/shield_white.svg';
import windIconImg from '../../assets/wind-icon.svg';
import styles from './VaDeCaronae.module.css';

const URLCaronaeAppleAppStore = 'https://www.apple.com/app-store/';
const URLCaronaeGooglePlayStore = 'https://play.google.com/';

export default function VaDeCaronae () {
  return (
    <div className={ styles.vaDeCaronae }>
      <AppGraphics />
      <CallToAction />
      <CornerRoad />
      <VerticalRoad />
      <HorizontalRoad />
      <AppStoreButton />
      <PlayStoreButton />
    </div>
  );
}

const CallToAction = () => <div className={ styles.callToAction }>
                             <h2>Juntos vamos mais longe,</h2>
                             <h1>Vá de Caronaê!</h1>
                           </div>;

const AppGraphics = () => {
  return (
      <div className={ styles.circleOuter }>
        <div className={ styles.circleInner }>
          <PeopleIcon />
          <ShieldIcon />
          <LeafIcon />
          <IphoneFront />
          <IphoneSide />
          <CarIcon />
        </div>
      </div>
  );
};

const PlayStoreButton = () => {
  return (
    <a className={ styles.playStoreButton } href={ URLCaronaeGooglePlayStore }>
      <img src={ playStoreLogo } />
      <div>
        <p className={ styles.buttonSmallText }>Disponível na</p>
        <p className={ styles.buttonLargeText }>Google Play</p>
      </div>
    </a>
  );
};

const AppStoreButton = () => {
  return (
    <a className={ styles.appStoreButton } href={ URLCaronaeAppleAppStore }>
      <img src={ appleLogo } />
      <div>
        <p className={ styles.buttonSmallText }>Disponível na</p>
        <p className={ styles.buttonLargeText }>App Store</p>
      </div>
    </a>
  );
};

const VerticalRoad = ({ dashes = '4' }) => {
  return (
    <div className={ styles.verticalRoad } >
      {
        Array.from({ length: dashes }, (_, index) => (
        <div className={ styles.verticalDash } key={ index }></div>
      ))}
    </div>
  );
};

const HorizontalRoad = ({ dashes = '4' }) => {
  return (
    <div className={ styles.horizontalRoad } >
      {
        Array.from({ length: dashes }, (_, index) => (
        <div className={ styles.horizontalDash } key={ index }></div>
      ))}
    </div>
  );
};

const CornerRoad = () => {
  return (
    <div className={ styles.cornerRoad }>
    </div>
  );
};

const PeopleIcon = () => {
  return (
    <div className={ styles.peopleIcon }>
      <img src={ peopleIconImg } />
    </div>
  );
};

const ShieldIcon = () => {
  return (
    <div className={ styles.shieldIcon }>
      <img src={ shieldIconImg } />
    </div>
  );
};

const LeafIcon = () => {
  return (
    <div className={ styles.leafIcon }>
      <img src={ leafIconImg } />
    </div>
  );
};

const CarIcon = () => {
  return (
    <div className={ styles.carIcon }>
      <img className={ styles.windImg } src={ windIconImg } />
      <img className={ styles.carImg } src={ jeepIconImg } />
    </div>
  );
};

const IphoneFront = () => {
  return (
    <div className={ styles.iphoneFront } >
      <img src={ iphoneFront } />
    </div>
  );
};

const IphoneSide = () => {
  return (
    <div className={ styles.iphoneSide } >
      <img src={ iphoneSide } />
    </div>
  );
};
