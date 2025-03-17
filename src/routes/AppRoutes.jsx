import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import PythonPage from "../pages/pythonpage";
import JavaPage from "../pages/javapage";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/python" element={<PythonPage />} />
        <Route path="/java" element={<JavaPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
