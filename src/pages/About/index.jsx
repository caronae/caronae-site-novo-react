
import ConhecaFrentes from '../../components/ConhecaFrentes';
import ConhecaProjeto from '../../components/ConhecaProjeto';
import EquipeCaronae from '../../components/EquipeCaronae';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import RazaoTudo from '../../components/RazaoTudo';
import SeInteressouPeloProjeto from '../../components/SeInteressouPeloProjeto';

const About = () => {
  return (
    <>
      <Navbar />
      <ConhecaProjeto/>
      <RazaoTudo />
      <ConhecaFrentes/>
      <SeInteressouPeloProjeto/>
      <EquipeCaronae/>
      <Footer/>;

    </>
  );
};

export default About;
