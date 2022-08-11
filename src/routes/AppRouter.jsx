import { Routes, Route, Link } from 'react-router-dom';
import Home from 'pages/Home.jsx';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MainRouter;
