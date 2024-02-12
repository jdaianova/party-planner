import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { nanoid } from "nanoid";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import appComponents from "./appComponents";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {appComponents.map((component) => (
          <Route
            key={nanoid()}
            path={component.path}
            element={component.name}
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
