import {
  GitBranch,
  CheckCircle2,
  Zap,
  Clock,
  CheckCircle,
  Workflow,
  TestTube,
  Layers,
  Key,
  Bell,
} from 'lucide-react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import yaml from 'react-syntax-highlighter/dist/esm/languages/hljs/yaml';
import github from 'react-syntax-highlighter/dist/esm/styles/hljs/github';

SyntaxHighlighter.registerLanguage('yaml', yaml);

const WORKFLOW_YAML = `name: Backend deployen

on:
  push:
    branches: 
      - main

jobs:
  build:
    steps:
      - name: Abhängigkeiten installieren
        run: npm install

      - name: Tests ausführen
        run: npm test

      - name: Projekt bauen
        run: npm run build

  deploy:
    needs: build
    environment: production
    steps:
      - name: Auf Server deployen
        run: deployflow deploy --env production`;

const editorCards = [
  {
    icon: GitBranch,
    title: 'Versionierte Workflows',
    description: 'Verwalte deine Pipelines in Git – direkt neben deinem Code.',
  },
  {
    icon: CheckCircle2,
    title: 'Automatisierte Tests vor dem Deploy',
    description: 'Stelle Qualität durch automatische Testläufe sicher.',
  },
  {
    icon: Zap,
    title: 'Deployments nach erfolgreichen Builds',
    description: 'Deploye sicher, sobald alle Prüfungen bestanden sind.',
  },
];

const featureCards = [
  {
    icon: Workflow,
    title: 'Pipeline Builder',
    description: 'Erstelle flexible Build- und Deployment-Pipelines ohne komplizierte Einrichtung.',
  },
  {
    icon: TestTube,
    title: 'Automatische Tests',
    description: 'Führe Unit-, Integrations- und E2E-Tests automatisch bei jeder Codeänderung aus.',
  },
  {
    icon: Layers,
    title: 'Deployment-Umgebungen',
    description: 'Verwalte Development, Staging und Production in einer zentralen Oberfläche.',
  },
  {
    icon: Key,
    title: 'Secret Management',
    description: 'Speichere API-Keys, Tokens und Zugangsdaten sicher und verschlüsselt.',
  },
  {
    icon: Bell,
    title: 'Benachrichtigungen',
    description: 'Informiere dein Team per E-Mail oder Slack bei erfolgreichen oder fehlgeschlagenen Builds.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Workflows in Minuten konfigurieren
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            DeployFlow ermöglicht Teams, automatisierte Build-, Test- und Deployment-Pipelines
            mit einfachen YAML-Konfigurationsdateien zu definieren. So bleiben Workflows
            verständlich, versionierbar und wiederverwendbar.
          </p>
        </div>

        {/* Code editor + side cards */}
        <div className="grid lg:grid-cols-5 gap-6 items-start mb-16">

          {/* Code editor — left, 3/5 */}
          <div className="lg:col-span-3 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            {/* Title bar */}
            <div className="flex items-center px-4 py-3 bg-gray-100 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span
                className="mx-auto text-sm text-gray-500"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                deployflow.yml
              </span>
            </div>

            {/* Code */}
            <SyntaxHighlighter
              language="yaml"
              style={github}
              customStyle={{
                margin: 0,
                padding: '1.25rem 1.5rem',
                fontSize: '0.8rem',
                lineHeight: '1.65',
                fontFamily: "'JetBrains Mono', monospace",
                background: '#ffffff',
              }}
              codeTagProps={{ style: { fontFamily: "'JetBrains Mono', monospace" } }}
              showLineNumbers
              lineNumberStyle={{
                fontFamily: "'JetBrains Mono', monospace",
                color: '#bbb',
                minWidth: '2.25rem',
                paddingRight: '1rem',
              }}
            >
              {WORKFLOW_YAML}
            </SyntaxHighlighter>

            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-t border-gray-200 text-sm">
              <span className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                Letzter Lauf: <strong>erfolgreich</strong>
              </span>
              <span className="flex items-center gap-2 text-gray-500">
                <Clock className="w-4 h-4" />
                Dauer: <strong className="text-gray-700">2m 34s</strong>
              </span>
              <span className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                Umgebung: <strong className="text-green-600">production</strong>
              </span>
            </div>
          </div>

          {/* Feature cards — right, 2/5 */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {editorCards.map((card, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-gray-900 font-semibold text-base mb-1">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
