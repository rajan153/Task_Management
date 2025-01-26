// const BASE_URL = import.meta.env.BASE_URL;
const BASE_URL = "http://localhost:4000/api/v1";

export const userEndpoints = {
  SIGNUP: BASE_URL + "/users/register",
  LOGIN: BASE_URL + "/users/login",
  FETCH_TASK: BASE_URL + "/users/task",
};

export const taskEndpoints = {
  CREATE_TASK: BASE_URL + "/tasks/create-task",
  DELETE_TASK: BASE_URL + "/tasks/delete-task",
  UPDATE_TASK: BASE_URL + "/tasks/update-task",
};

export const socialMediaEndpoints = {
  CREATE_POST: BASE_URL + "/social/create-post",
  FETCH_POST: BASE_URL + "/social/posts",
};
