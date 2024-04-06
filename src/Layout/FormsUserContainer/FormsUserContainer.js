import './forms-user-container.scss';

import { Link, useLocation } from 'react-router-dom';

export default function FormsUserContainer({ children }) {
  const pathname = useLocation().pathname;
  return (
    <section className="wrap">
      <div className="wrap__container">
        {children}
        <ul className="nav">
          {pathname === '/login' ? (
            <li>
              <span>Pas encore inscrit ? </span>
              <Link to="/inscription">Inscription</Link>
            </li>
          ) : (
            <li>
              <span>Déjà inscrit ? </span>
              <Link to="/login">Connexion</Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
