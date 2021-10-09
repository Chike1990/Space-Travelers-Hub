import axios from "axios"
import { missionsUrl } from "./urls"

export const fetchMissions = () =>
  axios({
    method: "get",
    url: missionsUrl
  })