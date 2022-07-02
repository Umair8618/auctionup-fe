import axios from "axios";

export const put = (endPoint,endPointType, encrypted, token) => {
    let headers = {'Accept': '*/*'};
    let url = endPoint;
    if (encrypted) {
        headers = {
            'Accept': '*/*',
            'Authorization': 'Bearer ' + token
        }
    }
    // console.log(headers);
    // const article = { title: 'React PUT Request Example' };

    if (endPointType === "LOCAL"){
        url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_BASE + endPoint;
    }
    return axios.put(url,"",
        {headers});
}