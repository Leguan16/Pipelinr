import { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  GitCommitHorizontal,
  Package,
  FlaskConical,
  Hammer,
  Rocket,
  ChevronRight,
  GitBranch,
  Timer,
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

type Status = 'success' | 'running' | 'pending';

const stages: { icon: React.ElementType; label: string; duration: string; status: Status }[] = [
  { icon: GitCommitHorizontal, label: 'Trigger',        duration: '–',      status: 'success' },
  { icon: Package,             label: 'Dependencies',   duration: '14s',    status: 'success' },
  { icon: FlaskConical,        label: 'Tests',          duration: '38s',    status: 'success' },
  { icon: Hammer,              label: 'Build',          duration: '52s',    status: 'running' },
  { icon: Rocket,              label: 'Deploy',         duration: '–',      status: 'pending' },
];

const statusConfig: Record<Status, { bg: string; border: string; text: string; dot: string; label: string }> = {
  success: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    dot: 'bg-green-500',
    label: 'Erfolgreich',
  },
  running: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    dot: 'bg-blue-500',
    label: 'Läuft…',
  },
  pending: {
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    text: 'text-gray-400',
    dot: 'bg-gray-300',
    label: 'Ausstehend',
  },
};

export function PipelineBuilderSection() {
  const [tab, setTab] = useState<'pipeline' | 'yaml'>('pipeline');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visuell oder als Code – du entscheidest
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Baue Pipelines per Drag &amp; Drop oder schreibe direkt YAML. Beides bleibt jederzeit synchron.
          </p>
        </div>

        {/* Tab switcher + mock window */}
        <div className="rounded-xl border border-gray-200 shadow-lg overflow-hidden">

          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* Tabs */}
            <div className="flex rounded-lg bg-gray-200 p-1 gap-1">
              <button
                onClick={() => setTab('pipeline')}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  tab === 'pipeline'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Pipeline Builder
              </button>
              <button
                onClick={() => setTab('yaml')}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  tab === 'yaml'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                style={tab === 'yaml' ? {} : { fontFamily: 'inherit' }}
              >
                <span style={tab === 'yaml' ? { fontFamily: "'JetBrains Mono', monospace" } : {}}>
                  deployflow.yml
                </span>
              </button>
            </div>

            <div className="w-16" /> {/* spacer to center tabs */}
          </div>

          {/* Pipeline view */}
          {tab === 'pipeline' && (
            <div className="bg-white p-8">
              {/* Run meta */}
              <div className="flex items-center gap-6 mb-8 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <GitBranch className="w-4 h-4" />
                  <span className="font-medium text-gray-700">main</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <GitCommitHorizontal className="w-4 h-4" />
                  <span className="font-mono text-xs">a3f92c1</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Timer className="w-4 h-4" />
                  1m 44s
                </span>
                <span className="flex items-center gap-1.5 ml-auto">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-blue-600 font-medium">Läuft</span>
                </span>
              </div>

              {/* Pipeline nodes */}
              <div className="flex items-center gap-0">
                {stages.map((stage, i) => {
                  const cfg = statusConfig[stage.status];
                  const Icon = stage.icon;
                  return (
                    <div key={i} className="flex items-center">
                      {/* Node */}
                      <div className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 w-32 ${cfg.bg} ${cfg.border}`}>
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          stage.status === 'success' ? 'bg-green-100' :
                          stage.status === 'running' ? 'bg-blue-100' : 'bg-gray-100'
                        }`}>
                          <Icon className={`w-5 h-5 ${cfg.text}`} />
                        </div>
                        <span className={`text-xs font-semibold text-center leading-tight ${
                          stage.status === 'pending' ? 'text-gray-400' : 'text-gray-700'
                        }`}>
                          {stage.label}
                        </span>
                        <div className="flex items-center gap-1">
                          {stage.status === 'success' && (
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                          )}
                          {stage.status === 'running' && (
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                          )}
                          {stage.status === 'pending' && (
                            <Clock className="w-3 h-3 text-gray-300" />
                          )}
                          <span className={`text-xs ${cfg.text}`}>
                            {stage.status === 'running' ? cfg.label : stage.duration !== '–' ? stage.duration : cfg.label}
                          </span>
                        </div>
                      </div>

                      {/* Arrow connector */}
                      {i < stages.length - 1 && (
                        <ChevronRight className={`w-5 h-5 flex-shrink-0 mx-1 ${
                          stages[i + 1].status === 'pending' ? 'text-gray-200' : 'text-gray-400'
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Step detail */}
              <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-4">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Aktueller Schritt — Build</p>
                <div className="flex flex-col gap-1.5 text-sm font-mono text-gray-700">
                  <span className="text-green-600">✓ npm install — 14s</span>
                  <span className="text-green-600">✓ npm test — 38s</span>
                  <span className="text-blue-600 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse inline-block" />
                    npm run build — läuft…
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* YAML view */}
          {tab === 'yaml' && (
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
          )}

        </div>
      </div>
    </section>
  );
}
