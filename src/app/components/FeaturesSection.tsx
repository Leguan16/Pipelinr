import {
  Workflow,
  TestTube,
  GitBranch,
  Layers,
  FileText,
  Key,
  Users,
  Bell
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Workflow,
      title: 'Pipeline Builder',
      description: 'Erstelle flexible Build- und Deployment-Pipelines ohne komplizierte Einrichtung.',
    },
    {
      icon: TestTube,
      title: 'Automatische Tests',
      description: 'Führe Unit-Tests, Integrationstests und End-to-End-Tests automatisch bei jeder Codeänderung aus.',
    },
    {
      icon: GitBranch,
      title: 'Git-Integration',
      description: 'Verbinde DeployFlow mit GitHub, GitLab oder Bitbucket und starte Pipelines direkt nach einem Commit.',
    },
    {
      icon: Layers,
      title: 'Deployment-Umgebungen',
      description: 'Verwalte Development, Staging und Production in einer zentralen Oberfläche.',
    },
    {
      icon: FileText,
      title: 'Build-Logs',
      description: 'Analysiere Fehler schnell mit übersichtlichen Logs und Statusmeldungen.',
    },
    {
      icon: Key,
      title: 'Secret Management',
      description: 'Speichere API-Keys, Tokens und Zugangsdaten sicher und verschlüsselt.',
    },
    {
      icon: Users,
      title: 'Teamrollen',
      description: 'Vergib Rollen wie Admin, Developer oder Viewer und kontrolliere Zugriffsrechte.',
    },
    {
      icon: Bell,
      title: 'Benachrichtigungen',
      description: 'Informiere dein Team automatisch per E-Mail oder Slack bei erfolgreichen oder fehlgeschlagenen Builds.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Alles, was dein Team für moderne CI/CD braucht
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
