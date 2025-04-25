import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/context/ThemeProvider';
import { AuthProvider } from '@/context/AuthContext';
import { BiddingProvider } from '@/context/BiddingContext';

// Layout components
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Pages
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import DashboardPage from '@/pages/DashboardPage';
import UploadPage from '@/pages/UploadPage';
import GalleryPage from '@/pages/GalleryPage';
import ProfilePage from '@/pages/ProfilePage';
import BiddingPage from '@/pages/BiddingPage';
import ArtworkDetailPage from '@/pages/ArtworkDetailPage';
import AboutPage from '@/pages/AboutPage';
import DiscoverPage from '@/pages/DiscoverPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Protected Route component
import { ProtectedRoute } from '@/components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BiddingProvider>
          <Router>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1 pt-16">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/discover" element={<DiscoverPage />} />
                  <Route path="/artwork/:id" element={<ArtworkDetailPage />} />
                  
                  {/* Protected routes */}
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <DashboardPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/upload"
                    element={
                      <ProtectedRoute>
                        <UploadPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <ProfilePage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/bidding"
                    element={
                      <ProtectedRoute>
                        <BiddingPage />
                      </ProtectedRoute>
                    }
                  />
                  
                  {/* Catch-all route */}
                  <Route path="/404" element={<NotFoundPage />} />
                  <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <Toaster />
          </Router>
        </BiddingProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;