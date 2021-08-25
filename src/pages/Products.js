import React, { Fragment } from "react";
import AvailableTrees from "../components/Trees/AvailableTrees";
import TreesSummary from "../components/Trees/TreesSummary";


export default function Products() {
  return (
    <Fragment>
      <div className="treeSummary">
        <TreesSummary />
      </div>
      <div className="availableTrees">
        <AvailableTrees />
      </div>
    </Fragment>
  );
}
