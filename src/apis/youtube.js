import axios from "axios";

const KEY = "AIzaSyAcICGNCk7P6XEj2Cr5Q5F9yHmsLlA5MuI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
