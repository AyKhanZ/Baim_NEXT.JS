import NavBar from "@/components/NavBar/NavBar";
import Team from "@/components/Team/Team";

import PositionRelativeLayout from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import React from "react";

export default function TeamPage() {
  return (
    <>
      <NavBar />
      <PositionRelativeLayout>
        <Team />
      </PositionRelativeLayout>
    </>
  );
}
