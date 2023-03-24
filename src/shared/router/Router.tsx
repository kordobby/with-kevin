import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageKevin from "../../pages/kevin";
import PageLeetrue from "../../pages/leetrue";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/kevin`} element={<PageKevin />} />
        <Route path={`/leetrue`} element={<PageLeetrue />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
