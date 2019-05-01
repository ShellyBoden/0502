import axios from 'axios';
const apiKey = "5418ebf7188b491f92fd4cdbd325d946";

export default axios.create({
  method: "get",
  baseURL: "https://newsapi.org/v2",
  params: {
    pageSize: 6
  },
  headers: {
    Authorization: apiKey
  }
});