import Layout, { LayoutContext } from "../../components/layout/true/Layout";
import Title from "../../components/layout/true/Title";
import NameCard from "../../components/nameCard/true/NameCard";

const NameCardTemplate = () => {
  return (
    <Layout>
      <Title>Dynamic Card</Title>
      <Title types="subtitle">Leetrue Version</Title>
      <Title types="desc">2023.03.25.</Title>
      <NameCard />
    </Layout>
  );
};

export default NameCardTemplate;
