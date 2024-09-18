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
      <Headings />
      <BackgroundCircles />
      <Roads />
      <PeopleIcon />
      <ShieldIcon />
      <LeafIcon />
      <IphoneFront />
      <IphoneSide />
      <CarIcon />
    </div>
  );
}

const Headings = () => {
  return (
    <div className={ styles.heading }>
      <h2>Juntos vamos mais longe,</h2>
      <h1>Vá de Caronaê!</h1>
    </div>
  );
};

const BackgroundCircles = () => {
  return (
    <>
      <div className={ styles.circleOuter }>
        <div className={ styles.circleInner } />
      </div>
    </>
  );
};

const StoreButton = (props) => {
  return (
    <a className={ styles.storeButton } href={ props.href }>
      <img src={ props.storeLogo } />
      <div>
        <p className={ styles.buttonSmallText }>Disponível na</p>
        <p className={ styles.buttonLargeText }>{ props.storeName }</p>
      </div>
    </a>
  );
};

const Roads = () => {
  return (
    <div className={ styles.roads }>
      <VerticalRoad />
      <div style={{ display: 'flex', gap: '2.5em', position: 'relative', left: '-3.75em' }} >
        <StoreButton storeName="App Store" storeLogo={ appleLogo }
                     href={ URLCaronaeAppleAppStore } />
        <StoreButton storeName="Google Play" storeLogo={ playStoreLogo }
                     href={ URLCaronaeGooglePlayStore } />
      </div>
      <div style={{ position: 'relative', left: '-4em' }} >
        <HorizontalRoad />
      </div>
    </div>
  );
};

const VerticalRoad = () => {
  return (
    <div className={ styles.verticalRoad } >
      <div className={ styles.verticalDash } />
      <div className={ styles.verticalDash } />
      <div className={ styles.verticalRoadBackground } />
    </div>
  );
};

const HorizontalRoad = () => {
  return (
    <div className={ styles.horizontalRoad } >
      <div className={ styles.horizontalDash } />
      <div className={ styles.horizontalDash } />
      <div className={ styles.horizontalDash } />
      <div className={ styles.horizontalDash } />
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
      <img src={ windIconImg } />
      <img src={ jeepIconImg } />
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
