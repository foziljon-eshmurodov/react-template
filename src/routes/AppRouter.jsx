import { Routes, Route, Link } from 'react-router-dom';
import ROUTES from './routes';

const MainRouter = () => {
  const renderRoutes = ROUTES.map(({ path, component }) => {
    const TopLevelComponet = component;
    return <Route key={path} path={path} element={<TopLevelComponet />} />;
  });

  return <Routes>{renderRoutes}</Routes>;
};

export default MainRouter;
