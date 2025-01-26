import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { userEndpoints } from "../apis";
const { FETCH_TASK, LOGIN, SIGNUP } = userEndpoints;

export const login = async (email, password, navigate) => {
  try {
    const response = await apiConnector("POST", LOGIN, { email, password });

    if (!response) {
      toast.error(response.data.message);
    }

    localStorage.setItem("token", response.data.accessToken);
    toast.success(response.data.message);
    navigate("/task-management");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const regiserUser = async (name, email, password, navigate) => {
  try {
    const response = await apiConnector("POST", SIGNUP, {
      name,
      email,
      password,
    });

    if (!response) {
      toast.error(response.data.message);
    }

    toast.success(response.data.message);
    navigate("/login");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const fetchingTask = async (token) => {
  try {
    const response = await apiConnector(
      "GET",
      FETCH_TASK,
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response) {
      toast.error(response.data.message);
    }

    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
