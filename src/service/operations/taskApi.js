import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { taskEndpoints } from "../apis";
const { CREATE_TASK, DELETE_TASK, UPDATE_TASK } = taskEndpoints;

export const creatingTask = async (title, token, navigate) => {
  try {
    const response = await apiConnector("POST", CREATE_TASK, title, {
      Authorization: `Bearer ${token}`,
    });

    if (!response) {
      toast.error(response.data.message);
    }

    toast.success(response.data.message);
    navigate("/task-management");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const deleteTask = async (taskId, token) => {
  try {
    const response = await apiConnector("DELETE", DELETE_TASK, taskId, {
      Authorization: `Bearer ${token}`,
    });

    if (!response) {
      toast.error(response.data.message);
    }

    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const updateTasks = async (taskId, status, token) => {
  try {
    const response = await apiConnector(
      "PATCH",
      UPDATE_TASK,
      { taskId, status },
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
