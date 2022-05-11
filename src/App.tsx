import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApplicationsPage } from './pages/Applications/Applications.page';
import { ClustersPage } from './pages/Clusters/Clusters.page';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ApplicationsPage />} />
          <Route path="/clusters" element={<ClustersPage />} />
        </Routes>
      </div>
    </Router>
  );
}
