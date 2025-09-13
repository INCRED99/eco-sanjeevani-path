import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageToggle';
import { Play, ArrowRight, Leaf, Trophy, Users } from 'lucide-react';
import heroImage from '@/assets/hero-environmental.jpg';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Leaf,
      title: 'Interactive Learning',
      titlePa: 'ਇੰਟਰਐਕਟਿਵ ਸਿੱਖਿਆ',
      description: 'Hands-on environmental lessons',
      descriptionPa: 'ਵਾਤਾਵਰਣ ਦੇ ਪ੍ਰੈਕਟੀਕਲ ਪਾਠ'
    },
    {
      icon: Trophy,
      title: 'Gamified Challenges',
      titlePa: 'ਗੇਮਿਫਾਈਡ ਚੁਣੌਤੀਆਂ',
      description: 'Earn points and badges',
      descriptionPa: 'ਪੁਆਇੰਟ ਅਤੇ ਬੈਜ ਪ੍ਰਾਪਤ ਕਰੋ'
    },
    {
      icon: Users,
      title: 'Community Impact',
      titlePa: 'ਕਮਿਊਨਿਟੀ ਪ੍ਰਭਾਵ',
      description: 'Real-world environmental action',
      descriptionPa: 'ਅਸਲ ਵਿੱਚ ਵਾਤਾਵਰਣ ਕਾਰਜ'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {t('welcome')}
              </h1>
              <p className="text-xl md:text-2xl font-medium text-white/90">
                {t('tagline')}
              </p>
              <p className="text-lg text-white/80 max-w-2xl">
                {t('description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onGetStarted}
                className="bg-white text-primary hover:bg-white/90 hover:text-primary font-semibold px-8 py-6 text-lg"
              >
                {t('getStarted')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-white/80">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-white/80">Schools</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-white/80">Trees Planted</div>
              </div>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};