import React, { useState, useContext } from "react";
import IpoContext from "../../context/IPO/ipoContext";

const Search = () => {
  const [text, setText] = useState("");

  const ipoContext = useContext(IpoContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      //   alertContext.setAlert("Please enter something", "danger");
      console.log("Enter Text");
    } else {
      console.log(text);
      ipoContext.searchIpoAllotment(text);
      //   setText("");
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
      {/* {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )} */}
    </div>
  );
};

export default Search;
