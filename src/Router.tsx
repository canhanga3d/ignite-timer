import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { History } from './Pages/History';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};
