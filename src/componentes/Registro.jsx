import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

const Registro = () => {
  return (
    <>
      <div className='estiloCard'>
        <h1>Crea una cuenta</h1> 
        <div>
          <SocialButton button={"fa-facebook"} />
          <SocialButton button={"fa-github"} />
          <SocialButton button={"fa-linkedin"} />
        </div>
        <p>o usa tu email para registrarte</p>
        <Formulario />
      </div>
    </>
  );
};

export default Registro;
