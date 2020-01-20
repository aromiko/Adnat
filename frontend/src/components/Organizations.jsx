import React from "react";
import { useSelector } from "react-redux";
import CreateJoinOrganizations from "./CreateJoinOrganizations";

export default function Organizations() {
  const inOrganization = useSelector(state => state.inOrganization);

  return (
    <div>
      {!inOrganization ? (
        <div>
          <CreateJoinOrganizations />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
