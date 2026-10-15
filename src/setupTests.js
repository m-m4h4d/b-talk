// Runs before each test file (configured in vite.config.js).
import '@testing-library/jest-dom/vitest';
import { configure } from '@testing-library/react';

// Pages are lazy-loaded, and the first load in a run compiles MUI on the fly,
// which can exceed Testing Library's 1s default for findBy* queries.
configure({ asyncUtilTimeout: 5000 });
