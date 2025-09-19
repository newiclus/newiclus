import React from "react";

import Container from "@components/common/container";
import Header from "@components/common/header";
import Summary from "@/components/common/summary";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Summary />
    </Container>
  );
};

export default Dashboard;
