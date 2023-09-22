import axios from "axios";

export const client = axios.create({
  baseURL: "http://miblog.inovecode.com/api/v1.0",
});
