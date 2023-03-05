import axios from "axios";

export const axiosOne = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//axios for https requirests
export const getPostsPage = async (pageParam = 1) => {
  const response = await axiosOne.get(`/posts?_page=${pageParam}`);
  return response.data;
};

// export const getPostsComments = async (pageParam = 1) => {
//   const response = await axiosOne.get(`posts/${e.queryKey[1]}/comments?_page=${pageParam}`);
//   return response.data;
// };
