import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getBlogById = (id) => {
  return axiosInstance
    .get(`/blogPost/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
};

export const blogArticles = () => {
  return axiosInstance
    .get("/blogPost")
    .then((posts) => posts.data)
    .catch((error) => {
      console.log(error);
    });
};
