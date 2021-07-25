import React, { useMemo } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import Table from "./Table";

const IpoResult = ({ ipo: { loading, ipoData } }) => {
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

const mapStateToProps = (state) => ({
  ipo: state.ipo,
});

export default connect(mapStateToProps)(IpoResult);
