import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../../pages/PageHome";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
