import { Zap, GitBranch, Shield, Users } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    { icon: Zap, text: 'Schnell eingerichtet' },
    { icon: GitBranch, text: 'GitHub, GitLab & Bitbucket Integration' },
    { icon: Shield, text: 'Sichere Secrets-Verwaltung' },
    { icon: Users, text: 'Skalierbar für Teams jeder Größe' },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <badge.icon className="w-8 h-8 text-blue-600" />
              <span className="text-sm text-gray-700">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
