"use client";

import { Container, DashboardPage } from "@/components";
import { withLayout } from "@/hoc/withLayout";

function DashBoard() {
  return (
    <Container>
      <DashboardPage />
    </Container>
  );
}

export default withLayout(DashBoard);
