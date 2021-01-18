// Global helper file (axe-helper.js)
import { configureAxe } from 'jest-axe';

const axe = configureAxe({
  rules: {
    // for demonstration only, don't disable rules that need fixing.
    region: { enabled: false },
  },
});

export default axe;
