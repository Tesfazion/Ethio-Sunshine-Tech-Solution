import { Route, Routes } from 'react-router-dom';
import AppShell from './layout/AppShell';
import ErrorBoundary from './components/ErrorBoundary';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PricingPage from './pages/PricingPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import PrivacyPage from './pages/PrivacyPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route
          index
          element={
            <ErrorBoundary title="Home page error">
              <HomePage />
            </ErrorBoundary>
          }
        />
        <Route
          path="services"
          element={
            <ErrorBoundary title="Services page error">
              <ServicesPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="projects"
          element={
            <ErrorBoundary title="Projects page error">
              <ProjectsPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="projects/:slug"
          element={
            <ErrorBoundary title="Project page error">
              <ProjectDetailPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="about"
          element={
            <ErrorBoundary title="About page error">
              <AboutPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="pricing"
          element={
            <ErrorBoundary title="Pricing page error">
              <PricingPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="contact"
          element={
            <ErrorBoundary title="Contact page error">
              <ContactPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="privacy"
          element={
            <ErrorBoundary title="Privacy page error">
              <PrivacyPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="*"
          element={
            <ErrorBoundary title="Page error">
              <NotFoundPage />
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}
