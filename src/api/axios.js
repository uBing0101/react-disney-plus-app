import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "f53be873300dd3d0a39c33c1026ef14a",
    language: "ko-KR"
  }
});

export default instance;