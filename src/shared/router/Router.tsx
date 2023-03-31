import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "@/pages/PageHome";
import SideBar from "@/components/_Common/SideBar";

const Router = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<PageHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
