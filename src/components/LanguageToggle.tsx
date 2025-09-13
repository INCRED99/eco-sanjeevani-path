import React, { createContext, useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageContextType {
  language: 'en' | 'pa';
  setLanguage: (lang: 'en' | 'pa') => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'welcome': 'Welcome to EcoLearn',
    'tagline': 'Gamify Your Environmental Learning',
    'description': 'Join thousands of students across India learning about sustainability through interactive challenges, quizzes, and real-world eco-tasks.',
    'getStarted': 'Get Started',
    'login': 'Login',
    'ecoPoints': 'Eco Points',
    'level': 'Level',
    'challenges': 'Challenges',
    'lessons': 'Lessons',
    'leaderboard': 'Leaderboard',
    'badges': 'Badges',
    'profile': 'Profile',
    'community': 'Community',
    'currentChallenges': 'Current Challenges',
    'recentAchievements': 'Recent Achievements',
    'treePlanter': 'Tree Planter',
    'wasteWarrior': 'Waste Warrior',
    'energySaver': 'Energy Saver',
  },
  pa: {
    'welcome': 'ਈਕੋਲਰਨ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ',
    'tagline': 'ਆਪਣੀ ਵਾਤਾਵਰਣ ਸਿੱਖਿਆ ਨੂੰ ਗੇਮਿਫਾਈ ਕਰੋ',
    'description': 'ਭਾਰਤ ਭਰ ਦੇ ਹਜ਼ਾਰਾਂ ਵਿਦਿਆਰਥੀਆਂ ਨਾਲ ਜੁੜੋ ਜੋ ਇੰਟਰਐਕਟਿਵ ਚੁਣੌਤੀਆਂ, ਕਵਿਜ਼ਾਂ ਅਤੇ ਅਸਲ ਈਕੋ-ਕਾਰਜਾਂ ਰਾਹੀਂ ਸਥਿਰਤਾ ਬਾਰੇ ਸਿੱਖ ਰਹੇ ਹਨ।',
    'getStarted': 'ਸ਼ੁਰੂ ਕਰੋ',
    'login': 'ਲਾਗਇਨ',
    'ecoPoints': 'ਈਕੋ ਪੁਆਇੰਟ',
    'level': 'ਪੱਧਰ',
    'challenges': 'ਚੁਣੌਤੀਆਂ',
    'lessons': 'ਪਾਠ',
    'leaderboard': 'ਲੀਡਰਬੋਰਡ',
    'badges': 'ਬੈਜ',
    'profile': 'ਪ੍ਰੋਫਾਈਲ',
    'community': 'ਕਮਿਊਨਿਟੀ',
    'currentChallenges': 'ਮੌਜੂਦਾ ਚੁਣੌਤੀਆਂ',
    'recentAchievements': 'ਹਾਲ ਦੀਆਂ ਪ੍ਰਾਪਤੀਆਂ',
    'treePlanter': 'ਰੁੱਖ ਲਗਾਉਣ ਵਾਲਾ',
    'wasteWarrior': 'ਕੂੜਾ ਯੋਧਾ',
    'energySaver': 'ਊਰਜਾ ਬਚਾਉਣ ਵਾਲਾ',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'pa'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'pa' : 'en')}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'en' ? 'ਪੰਜਾਬੀ' : 'English'}
    </Button>
  );
};