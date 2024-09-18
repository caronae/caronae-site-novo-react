import imagemAmigos from '../../assets/amigos.jpeg';
import { TextInput, TextArea, SubmitButton } from '../Form';
import ImagePill from '../ImagePill';
import MailIcon from '../MailIcon';
import styles from './SeInteressouPeloProjeto.module.css';

export default function SeInteressouPeloProjeto({
  withDecoration = true
}) {
  return (
    <div className={ styles.seInteressouPeloProjeto }>
      <SeInteressouHeading />
      <SeInteressouForm />

      { withDecoration ?
        (
        <>
          <MarginDecoration
            element={
              <Pill
                width="25.0000em"
                height="8.1250em"
                backgroundColor="rgba(23, 178, 112, 1)"
              />
            }
            rotation="-25deg"
            left="-19em"
            top="-8.7500em"
          />

          <MarginDecoration
            element={<MailIcon size="8.7500em" backgroundColor="#2B388A" />}
            rotation="30deg"
            left="-12em"
            top="6.2500em"
          />

          <MarginDecoration
            element={<MailIcon size="8.7500em" backgroundColor="#EB3D38" />}
            rotation="-20deg"
            right="-4em"
            top="-11.2500em"
          />

          <MarginDecoration
            element={
              <Pill
                width="25.0000em"
                height="8.1250em"
                backgroundColor="rgba(110, 54, 31, 1)"
              />
            }
            rotation="25deg"
            right="-25em"
            top="4.0000em"
          />

          <MarginDecoration
            element={<MailIcon size="10.9375em" backgroundColor="#ED8024" />}
            rotation="30deg"
            right="-13em"
            bottom="0em"
          />
        </>
      ) : null}
    </div>
  );
}

function SeInteressouHeading() {
  return (
    <div className={ styles.heading }>
      <h1>Se interessou pelo projeto? Nos envie uma mensagem</h1>
      <span>
        <ImagePill width="21.8750em" height="7.1875em" src={imagemAmigos} />
        <MailIcon backgroundColor="#eb72ac" size="7.1875em" />
      </span>
    </div>
  );
}

function SeInteressouForm() {
  const handleSubmit = event => {
    event.preventDefault();
    // TODO: fazer o envio
  };

  return (
    <form className={ styles.form } onSubmit={handleSubmit}>
      <span>
        <TextInput name="nome" id="nome" label="Nome" />
        <TextInput
          name="email"
          id="nome"
          label="E-mail"
          placeholder="nome@email.com"
        />
      </span>

      <TextInput
        name="objetivo"
        id="objetivo"
        label="Objetivo do e-mail"
        placeholder="Quero participar da extensão"
      />

      <TextArea
        name="mensagem"
        id="mensagem"
        label="Mensagem"
        rows="4"
        placeholder="Escreva aqui"
      />

      <SubmitButton />
    </form>
  );
}

function MarginDecoration(props) {
  return (
    <div
      style={{
        position: 'absolute',
        transform: `rotate(${props.rotation})`,
        right: props.right,
        left: props.left,
        top: props.top,
        bottom: props.bottom
      }}
    >
      {props.element}
    </div>
  );
}

const Pill = (props) => {
  return (
    <div style={{ height: props.height, width: props.width, backgroundColor: props.backgroundColor,
        borderRadius: props.height }}>
    </div>
  );
};
