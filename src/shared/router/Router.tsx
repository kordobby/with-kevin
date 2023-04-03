import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "@/pages/PageHome";
import PageTemplate from "@/pages/PageTemplate";

// Name Card Components
import TrueCardTemplate from "@/templates/true/NameCardTemplate";
import KevinCardTemplate from "@/templates/kevin/NameCardTemplate";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        {/* Name Card */}
        <Route
          path="/DynamicCard/:member"
          element={
            <PageTemplate
              trueComponent={<TrueCardTemplate />}
              kevinComponent={<KevinCardTemplate />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
