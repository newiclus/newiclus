import React from "react";

import Container from "@components/common/container";
import Header from "@components/common/header";
import Summary from "@/components/common/summary";
import TechStack from "@/components/common/tech-stack";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Summary />
      <TechStack />
    </Container>
  );
};

export default Dashboard;
