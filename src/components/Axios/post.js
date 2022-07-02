import axios from "axios";

export const post = (endPoint, endPointType, data, encrypted, token) => {
  let headers = { Accept: "*/*" };
  let url = endPoint;
  if (encrypted) {
    headers = {
      Accept: "*/*",
      Authorization: "Bearer " + token,
      // 'Content-Type': "application/x-www-form-urlencoded",
    };
  }
  if (endPointType === "LOCAL") {
    url = process.env.REACT_APP_BASE_URL + endPoint;
  }
  return axios.post(url, data, { headers });
};
