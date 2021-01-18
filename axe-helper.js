// Global helper file (axe-helper.js)
import { configureAxe } from 'jest-axe';

const axe = configureAxe({
  rules: {
    // Disabled because not all components need landmarks
    region: { enabled: false },
  },
});

export default axe;
