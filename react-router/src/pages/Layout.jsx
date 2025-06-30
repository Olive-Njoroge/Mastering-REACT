import {Outlet, Link} from 'react-router-dom'

export default function Layout(){
    return(
        <>
          <nav>
            <ul className="nav-list">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/form" className="nav-link">Form</Link>
                </li>
            </ul>
          </nav>

          <Outlet />
        </>
    );
}