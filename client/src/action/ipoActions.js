import { SEARCH, SET_LOADING } from "./types";
import axios from "axios";
import XMLParser from "react-xml-parser";

// Search IPO Allotment
export const searchIpoAllotment = (PAN) => async (dispatch) => {
  dispatch(setLoading());

  let ipoDataTemp = [];
  try {
    const res = await axios.get("/ipo");
    // console.log(res.data);
    const ipos = res.data;
    for (let i = 0; i < ipos.length; i++) {
      const body = {
        clientid: ipos[i].company_id,
        PAN: PAN,
        key_word: "PAN",
      };
      const res = await axios.post("/ipo", body);
      const object = JSON.parse(res.data);
      // console.log("xml: " + i);
      // console.log(object.d);
      var xml = new XMLParser().parseFromString(object.d);
      try {
        if (xml.getElementsByTagName("id")[0] !== undefined) {
          var id = xml.getElementsByTagName("id")[0].value;
          var company = xml.getElementsByTagName("companyname")[0].value;
          var shares = xml.getElementsByTagName("SHARES")[0].value;
          var allotment = xml.getElementsByTagName("ALLOT")[0].value;

          ipoDataTemp.push({
            id,
            company,
            shares,
            allotment,
          });
        } else {
          ipoDataTemp.push({
            id: ipos[i].company_id,
            company: ipos[i].companyname,
            shares: "Not applied",
            allotment: "0",
          });
        }
      } catch (error) {
        console.log("Error in PAN Search: " + error);
      }
    } //for loop exit
    // console.log(ipoDataTemp);
  } catch (err) {
    console.log("Error in fetching IPOs: " + err);
  }

  dispatch({
    type: SEARCH,
    payload: ipoDataTemp,
  });
};

//set Loading/spinner
export const setLoading = () => {
  console.log("inside setLoading");
  return {
    type: SET_LOADING,
  };
};
