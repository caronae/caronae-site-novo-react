import './styles.css';
import mailIcon from '../../assets/mail-icon.svg';

export default function MailIcon({
  backgroundColor = '#17b270',
  size = '10.0000em'
}) {
  return (
    <div
      className="mail-icon-container"
      style={{
        width: `${size}`,
        height: `${size}`,
        backgroundColor: `${backgroundColor}`,
        borderRadius: '50%'
      }}
    >
      <img src={mailIcon} style={{ width: `calc(${ size } / 2)` }} />
    </div>
  );
}
