import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "@/pages/PageHome";
import SideBar from "@/components/Common/SideBar";
import NameCards from "@/pages/NameCards";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/nameCards" element={<NameCards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
