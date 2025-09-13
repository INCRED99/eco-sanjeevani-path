import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageToggle';
import { 
  Leaf, 
  Trophy, 
  Zap, 
  Target, 
  TreePine, 
  Recycle, 
  Star,
  TrendingUp,
  Users,
  CheckCircle
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { t } = useLanguage();

  const userStats = {
    ecoPoints: 1250,
    level: 8,
    levelProgress: 65,
    rank: 42,
    streakDays: 12
  };

  const currentChallenges = [
    {
      id: 1,
      title: 'Plant a Tree Challenge',
      titlePa: 'ਰੁੱਖ ਲਗਾਓ ਚੁਣੌਤੀ',
      description: 'Plant a tree and upload a photo',
      descriptionPa: 'ਇੱਕ ਰੁੱਖ ਲਗਾਓ ਅਤੇ ਫੋਟੋ ਅੱਪਲੋਡ ਕਰੋ',
      points: 100,
      icon: TreePine,
      color: 'text-success'
    },
    {
      id: 2,
      title: 'Waste Segregation',
      titlePa: 'ਕੂੜਾ ਵੱਖਰਾ ਕਰਨਾ',
      description: 'Complete the waste sorting quiz',
      descriptionPa: 'ਕੂੜਾ ਛਾਂਟਣ ਦੀ ਕਵਿਜ਼ ਪੂਰੀ ਕਰੋ',
      points: 50,
      icon: Recycle,
      color: 'text-accent'
    },
    {
      id: 3,
      title: 'Energy Conservation',
      titlePa: 'ਊਰਜਾ ਸੰਰਖਣ',
      description: 'Track your electricity usage for a week',
      descriptionPa: 'ਇੱਕ ਹਫ਼ਤੇ ਲਈ ਆਪਣੀ ਬਿਜਲੀ ਦੀ ਵਰਤੋਂ ਦਾ ਪਤਾ ਲਗਾਓ',
      points: 75,
      icon: Zap,
      color: 'text-sky'
    }
  ];

  const recentBadges = [
    { name: t('treePlanter'), icon: TreePine, earned: '2 days ago', color: 'bg-success' },
    { name: t('wasteWarrior'), icon: Recycle, earned: '1 week ago', color: 'bg-accent' },
    { name: t('energySaver'), icon: Zap, earned: '2 weeks ago', color: 'bg-sky' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary/10 to-success/10 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t('ecoPoints')}</p>
                <p className="text-3xl font-bold text-primary">{userStats.ecoPoints.toLocaleString()}</p>
              </div>
              <Leaf className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/10 to-accent/20 border-accent/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t('level')}</p>
                <p className="text-3xl font-bold text-accent">{userStats.level}</p>
                <Progress value={userStats.levelProgress} className="mt-2 h-2" />
              </div>
              <Trophy className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sky/10 to-sky/20 border-sky/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">School Rank</p>
                <p className="text-3xl font-bold text-sky">#{userStats.rank}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-sky" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-earth/10 to-earth/20 border-earth/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Streak Days</p>
                <p className="text-3xl font-bold text-earth">{userStats.streakDays}</p>
              </div>
              <Target className="h-8 w-8 text-earth" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Challenges */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              {t('currentChallenges')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentChallenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <div key={challenge.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full bg-muted`}>
                      <Icon className={`h-5 w-5 ${challenge.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium">{challenge.title}</h4>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      {challenge.points} pts
                    </Badge>
                    <Button size="sm" className="block">
                      Start
                    </Button>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-accent" />
              {t('recentAchievements')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                  <div className={`p-2 rounded-full ${badge.color} text-white`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{badge.name}</h4>
                    <p className="text-sm text-muted-foreground">{badge.earned}</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
              );
            })}
            
            <div className="mt-4 p-4 bg-muted/50 rounded-lg text-center">
              <Users className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                Join our eco-community to earn more badges and compete with friends!
              </p>
              <Button size="sm" className="mt-2">
                Join Community
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};