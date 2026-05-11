import { Route, Routes } from 'react-router-dom';
import AppShell from './layout/AppShell';
import ErrorBoundary from './components/ErrorBoundary';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';

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
          path="contact"
          element={
            <ErrorBoundary title="Contact page error">
              <ContactPage />
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
