import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  let error = useRouteError();
  console.table(error);
  return (
    <>
      <div className=" error ">
        <h1>Error Boundary</h1>
        <h2>Oops!! Caught</h2>
        <h3>
          {error.status} :{error.statusText}
        </h3>
      </div>
    </>
  );
}

export default ErrorBoundary;
