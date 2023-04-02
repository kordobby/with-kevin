import Layout from "@/components/layout/true/Layout";
import { useNavigate } from "react-router-dom";

type PageTypes = "/nameCards";
const HomeTemplates = () => {
  const navigate = useNavigate();
  const movePages = (pages: PageTypes): void => {
    navigate(pages);
  };
  return (
    <Layout>
      <button
        onClick={() => {
          movePages("/nameCards");
        }}
      >
        Dynamic Cards
      </button>
    </Layout>
  );
};

export default HomeTemplates;
