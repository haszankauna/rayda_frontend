import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Main = React.lazy(() => import("pages/Main"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
