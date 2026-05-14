import imprintContent from '../../content/imprint.md?raw';
import { LegalPage } from '../components/LegalPage';

export function Imprint() {
  return <LegalPage content={imprintContent} />;
}
