import { useNavigate } from "react-router-dom";


import Navbar from "../components/Navbar";
import { authRepository } from "../repositories/authRepository";
import "./HomePage.css";


function HomePage() {
  const navigate = useNavigate();
  const user = authRepository.getCurrentUser();


  const handleLogout = () => {
    authRepository.logout();
    navigate("/login", { replace: true });
  };


  return (
    <>
      <Navbar username={user?.name} />
      <main className="home-page__content">
        <h1>Página principal</h1>


      {user ? (
        <>
          <p>Bienvenido, {user.name}</p>
          <p>Carnet: {user.carnet}</p>
          <p>Rol: {user.role}</p>


          <button className="home-page__logout" type="button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <p>No existe una sesión activa.</p>
      )}
      </main>
    </>
  );
}


export default HomePage;
