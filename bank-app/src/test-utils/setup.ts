import { TextEncoder } from 'node:util';

import '@testing-library/jest-dom';

global.TextEncoder = TextEncoder;
