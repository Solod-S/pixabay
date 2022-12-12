import { Route, Routes, Navigate } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';

import PrimarySearchAppBar from 'components/AppBar/AppBar';

export const App = () => {
  return (
    <Routes>
      <Route end path="/" element={<PrimarySearchAppBar />}>
        <Route index element={<HomePage />} />
        <Route path="favorite" element={<div>!!!</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
