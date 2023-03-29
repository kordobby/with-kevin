import Layout from "@/components/layout/kevin/Layout";
import Title from "@/components/layout/kevin/Title";
import NameCard from "@/components/nameCard/kevin/NameCard";

const NameCardTemplate = () => {
  return (
    <Layout>
      <Title types="main">Dynamic Card</Title>
      <Title types="sub">Kevin Kim Version</Title>
      <Title types="desc">2023.03.30.</Title>
      <NameCard />
    </Layout>
  );
};

export default NameCardTemplate;
