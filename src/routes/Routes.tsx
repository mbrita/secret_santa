import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';

import { HomePage } from '../pages/homePage/HomePage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
