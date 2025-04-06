import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Layout>
        <Home />
        <Analytics />
        <SpeedInsights />
      </Layout>
    </Router>
  );
}
