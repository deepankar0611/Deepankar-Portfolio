import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Layout>
        <Home />
        <Analytics />
      </Layout>
    </Router>
  );
}
