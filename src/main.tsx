import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.scss';
import { Root } from './layouts/Root.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
