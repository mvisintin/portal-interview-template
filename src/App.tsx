import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApplicationsPage } from './pages/Applications/Applications.page';
import { ClustersPage } from './pages/Clusters/Clusters.page';

export default function App() {
  return (
    <Router>
      <main className="container">
        <nav>
          <ul>
            <li>
              <strong>Ondat</strong>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'contrast' : undefined
                }
              >
                Applications
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'contrast' : undefined
                }
                to="/clusters"
              >
                Clusters
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ApplicationsPage />} />
          <Route path="/clusters" element={<ClustersPage />} />
        </Routes>
      </main>
    </Router>
  );
}
