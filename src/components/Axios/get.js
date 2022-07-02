import axios from "axios";

export const get = (endPoint,endPointType, data, encrypted, token) => {
    let headers = {'Accept': '*/*'};
    let url = endPoint;
    if (encrypted) {
        headers = {
            'Accept': '*/*',
            'Authorization': 'Bearer ' + token
        }
    }
    if (endPointType === "LOCAL"){
        url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_BASE + endPoint;
        if (data !== ''){
            url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_BASE + endPoint + "/" + data;
        }
    }
    return axios.get(url,
        {headers});
}