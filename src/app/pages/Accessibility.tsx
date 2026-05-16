import accessibilityContent from '../../content/accessibility.md?raw';
import { LegalPage } from '../components/LegalPage';

export function Accessibility() {
  return <LegalPage content={accessibilityContent} />;
}
