import React from 'react';
import { Button } from '@/components/ui/button';
import { LanguageToggle, useLanguage } from './LanguageToggle';
import { Leaf, Home, Trophy, Book, Users, Award, User } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const { t } = useLanguage();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'lessons', label: t('lessons'), icon: Book },
    { id: 'challenges', label: t('challenges'), icon: Trophy },
    { id: 'leaderboard', label: t('leaderboard'), icon: Award },
    { id: 'community', label: t('community'), icon: Users },
    { id: 'profile', label: t('profile'), icon: User },
  ];

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">EcoLearn</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  onClick={() => onNavigate(item.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>

          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};