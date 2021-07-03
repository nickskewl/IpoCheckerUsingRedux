import React, { useContext, useMemo } from "react";
import IpoContext from "../../context/IPO/ipoContext";
import Spinner from "../layout/Spinner";
import Table from "./Table";

const IpoResult = () => {
  const ipoContext = useContext(IpoContext);

  const { loading, ipoData } = ipoContext;
  const columns = useMemo(
    () => [
      {
        Header: "IPO allotment details for searched PAN number",
        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Company",
            accessor: "company",
          },
          {
            Header: "Shares",
            accessor: "shares",
          },
          {
            Header: "Alloted",
            accessor: "allotment",
          },
        ],
      },
    ],
    []
  );

  if (loading) {
    return <Spinner />;
  }

  const updateId = () => {
    for (let i = 0; i < ipoData.length; i++) {
      ipoData[i].id = i + 1;
    }
    return true;
  };

  return (
    <div className="container">
      {ipoData.length > 0 && updateId() && (
        <Table columns={columns} data={ipoData} />
      )}
    </div>
  );
};

export default IpoResult;
