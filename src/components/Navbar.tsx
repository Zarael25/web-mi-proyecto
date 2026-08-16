import "./Navbar.css";


interface NavbarProps {
  username?: string;
}


function Navbar({ username = "Invitado" }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <div className="navbar__logo" aria-label="Espacio para el logo">
          LOGO
        </div>
        <p className="navbar__title">Mi Proyecto</p>
      </div>

      <div className="navbar__actions">
        <span className="navbar__username">{username}</span>

        <button className="navbar__button" type="button" title="Carrito">
          <svg className="navbar__icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="9" cy="20" r="1" />
            <circle cx="19" cy="20" r="1" />
            <path d="M3 4h2l2.4 10.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6" />
          </svg>
          <span className="navbar__button-label">Carrito</span>
        </button>

        <button className="navbar__button" type="button" title="Notificaciones">
          <svg className="navbar__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>
          <span className="navbar__button-label">Notificaciones</span>
        </button>

        <button className="navbar__button" type="button" title="Perfil">
          <svg className="navbar__icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
          </svg>
          <span className="navbar__button-label">Perfil</span>
        </button>
      </div>
    </header>
  );
}


export default Navbar;
