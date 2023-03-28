import Layout from "@/components/layout/kevin/Layout";
import Title from "@/components/layout/kevin/Title";
import NameCard from "@/components/nameCard/kevin/NameCard";

const NameCardTemplate = () => {
  return (
    <Layout>
      <Title types="main">Kevin Kim</Title>
      <Title types="sub">Name Card Work</Title>
      <Title types="desc">Date: blah blah</Title>
      <NameCard />
    </Layout>
  );
};

export default NameCardTemplate;
