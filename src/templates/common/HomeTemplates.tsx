import CommonLayout from "@/components/Common/CommonLayout";
import { useNavigate } from "react-router-dom";
import Contents from "@/components/Common/Contents";

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
      <Contents></Contents>
    </CommonLayout>
  );
};

export default HomeTemplates;
