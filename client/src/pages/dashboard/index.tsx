
import { Link, useNavigate } from "react-router-dom";

export const Dashboard = () => {

  return (
    <div className="singup-container">
      <div className="singup-title">Usuarios disponiveis no sitema</div>
        <div className="user-details">
          <div className="user-input-box">
            <span className="user-input-details">Nome</span>
          </div>
          <div className="user-input-box">
            <span className="user-input-details">Editar</span>
            <span className="user-input-details">Excluir</span>
          </div>
        </div>

        <div className="user-input-div-button">

          Fazer Login

        </div>
      <Link to="/newform/formapt"> Criar Formulario APT {`->`} </Link>
    </div>
  );
}



