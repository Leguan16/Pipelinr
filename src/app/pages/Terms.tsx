import termsContent from '../../content/terms.md?raw';
import { LegalPage } from '../components/LegalPage';

export function Terms() {
  return <LegalPage content={termsContent} />;
}
