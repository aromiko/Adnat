import React from "react";
import { useSelector } from "react-redux";
import CreateJoinOrganizations from "./CreateJoinOrganizations";
import MainOrganization from "./MainOrganization";

export default function Organizations() {
  const inOrganization = useSelector(state => state.inOrganization);

  if (inOrganization) {
    return <MainOrganization />;
  } else {
    return <CreateJoinOrganizations />;
  }
}
