import ReactMarkdown from 'react-markdown';
import { Header } from './Header';
import { Footer } from './Footer';

interface LegalPageProps {
  content: string;
}

export function LegalPage({ content }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold text-gray-900 mb-8">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 mb-6">{children}</p>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-blue-600 underline underline-offset-2 hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 text-gray-700 mb-6">{children}</ul>
              ),
              li: ({ children }) => <li className="mb-1">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
              em: ({ children }) => <em className="text-sm text-gray-500">{children}</em>,
              hr: () => <hr className="my-6 border-gray-200" />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
