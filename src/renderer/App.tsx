import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';

import './App.css';
import Upload from './pages/upload';
import Navigation from './navigation';
import FilesPage from './pages/files';
import Settings from './pages/settings';
import Login from './auth/login';
import Register from './auth/register';
import Forgot from './auth/forgot';
import ForgotReset from './auth/forgotReset';
import SecuritySettings from './pages/securitySettings';
import PlanSettings from './pages/planSettings';
import NotificationSettings from './pages/notificationSettings';
import BillingSettings from './pages/billingSettings';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/forgotreset" element={<ForgotReset />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/files" element={<FilesPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/security" element={<SecuritySettings />} />
        <Route path="/security" element={<SecuritySettings />} />
        <Route path="/plan" element={<PlanSettings />} />
        <Route path="/notifications" element={<NotificationSettings />} />
        <Route path="/billing" element={<BillingSettings />} />
      </Routes>
    </Router>
  );
}
