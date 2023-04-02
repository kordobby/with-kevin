import CommonLayout from "@/components/Common/CommonLayout";
import { useNavigate } from "react-router-dom";

type PageTypes = "/nameCards";
const HomeTemplates = () => {
  const navigate = useNavigate();
  const movePages = (pages: PageTypes): void => {
    navigate(pages);
  };
  return (
    <CommonLayout>
      <button
        onClick={() => {
          movePages("/nameCards");
        }}
      >
        Dynamic Cards
      </button>
    </CommonLayout>
  );
};

export default HomeTemplates;
