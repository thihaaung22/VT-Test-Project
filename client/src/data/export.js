import axios from "axios";
import download from "downloadjs";

const { REACT_APP_SERVER } = process.env;

export const exportPdf = () => {
  /*  axios
    .get(`${REACT_APP_SERVER}/api/records/download`, { responseType: "blob" })
    .then((response) => {
      window.open(URL.createObjectURL(response.data));
    })
    .catch((err) => {
      alert("An error occured while fetching the export.");
    }); */

  axios
    .get(`${REACT_APP_SERVER}/api/records/download`, {
      responseType: "blob"
    })
    .then((response) => {
      console.log(response);
      const content = response.headers["application/pdf"];
      download(response.data, "export.pdf", content);
    })
    .catch((error) => alert(error));
};
