import React, { useState } from 'react';
import { LanguageProvider } from '@/components/LanguageToggle';
import { HeroSection } from '@/components/HeroSection';
import { Navigation } from '@/components/Navigation';
import { Dashboard } from '@/components/Dashboard';
import { AuthModal } from '@/components/AuthModal';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('hero');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleGetStarted = () => {
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (userData: any) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'hero':
        return <HeroSection onGetStarted={handleGetStarted} />;
      case 'dashboard':
        return <Dashboard />;
      case 'lessons':
        return (
          <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-primary mb-6">Interactive Lessons</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Climate Change Basics</h3>
                <p className="text-muted-foreground mb-4">Learn about greenhouse gases and global warming</p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm">Coming Soon: Interactive climate simulation</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'challenges':
        return (
          <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-primary mb-6">Environmental Challenges</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Tree Planting Challenge</h3>
                <p className="text-muted-foreground mb-4">Plant a tree and share your photo</p>
                <div className="bg-success/10 p-4 rounded-lg">
                  <p className="text-sm">Reward: 100 Eco Points + Tree Planter Badge</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'leaderboard':
        return (
          <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-primary mb-6">Leaderboard</h1>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground">School and individual rankings coming soon!</p>
            </div>
          </div>
        );
      case 'community':
        return (
          <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-primary mb-6">Eco Community</h1>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground">Share your eco-stories and connect with other students!</p>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-primary mb-6">Profile</h1>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground">View and edit your profile settings</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        {currentPage !== 'hero' && (
          <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
        )}
        
        {renderCurrentPage()}

        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      </div>
    </LanguageProvider>
  );
};

export default Index;