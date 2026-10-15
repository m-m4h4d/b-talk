// Runs before each test file (picked up automatically by react-scripts).
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// React Router 7 uses TextEncoder, which the jsdom version bundled with
// react-scripts doesn't provide.
Object.assign(global, { TextEncoder, TextDecoder });
