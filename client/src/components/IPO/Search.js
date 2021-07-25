import React, { useState, useContext } from "react";
// import IpoContext from "../../context/IPO/ipoContext";
import { connect } from "react-redux";
import { searchIpoAllotment } from "../../action/ipoActions";

const Search = ({ searchIpoAllotment }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (text !== "") {
      searchIpoAllotment(text);
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter PAN number..."
          value={text}
          onChange={onChange}
          required
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

export default connect(null, { searchIpoAllotment })(Search);
