import privacyContent from '../../content/privacy.md?raw';
import { LegalPage } from '../components/LegalPage';

export function Privacy() {
  return <LegalPage content={privacyContent} />;
}
