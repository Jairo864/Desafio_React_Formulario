
const Alerta = ({ message, color }) => {
  return (
    <div className={`alert alert-${color}`} role='alert' id='alerta'>
      {message}
    </div>
  );
};

export default Alerta;
