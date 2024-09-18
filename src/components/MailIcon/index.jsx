import { useState } from 'react';
import './styles.css';
import mailIcon from '../../assets/mail-icon.svg';

export default function MailIcon({
  backgroundColor = '#17b270',
  size = '10.0000em'
}) {
  const [imgSize] = useState(parseFloat(size));

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
      <img src={mailIcon} style={{ width: `${imgSize * 0.5}em` }} />
    </div>
  );
}
