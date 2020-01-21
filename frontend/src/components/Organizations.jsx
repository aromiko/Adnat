import React from "react";
import { useSelector } from "react-redux";
import CreateJoinOrganizations from "./CreateJoinOrganizations";
import MainOrganization from "./MainOrganization";

export default function Organizations() {
  const inOrganization = useSelector(state => state.inOrganization);
  const isDataLoaded = useSelector(state => state.isDataLoaded);

  if (inOrganization && isDataLoaded) {
    return <MainOrganization />;
  } else if (!inOrganization && isDataLoaded) {
    return <CreateJoinOrganizations />;
  }
}
