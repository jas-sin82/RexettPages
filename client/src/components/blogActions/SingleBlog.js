import axios from "axios";

export const getBlogById = (id) => {
  return axios
    .get(`/blogPost/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
};

export const blogArticles = () => {
  return axios
    .get("/blogPost")
    .then((posts) => posts.data)
    .catch((error) => {
      console.log(error);
    });
};
