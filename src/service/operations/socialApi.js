import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { socialMediaEndpoints } from "../apis";
const { CREATE_POST, FETCH_POST } = socialMediaEndpoints;

export const creatingPost = async (data, token) => {
  try {
    const response = await apiConnector("POST", CREATE_POST, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });

    if (!response) {
      toast.error(response.data.message);
    }

    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const fetchPost = async (token) => {
  try {
    const response = await apiConnector(
      "GET",
      FETCH_POST,
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
