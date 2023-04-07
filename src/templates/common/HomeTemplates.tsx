import CommonLayout from "@/components/Common/CommonLayout";
import Contents from "@/components/Common/Contents";

type PageTypes = "/nameCards";
export type ContentsTypes = "Dynamic Card";

const HomeTemplates = () => {
  return (
    <CommonLayout>
      <Contents types={"Dynamic Card"}></Contents>
    </CommonLayout>
  );
};

export default HomeTemplates;

/*
주석처리 됨 - 페이지 이동 관련

import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const movePages = (pages: PageTypes): void => {
  navigate(pages);
};

<button
onClick={() => {
  movePages("/nameCards");
}}
>
Dynamic Cards
</button>
*/
