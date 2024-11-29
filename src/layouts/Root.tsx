import { BrowserRouter } from 'react-router-dom';
import { Router } from '../routes/Routes';

export const Root = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
