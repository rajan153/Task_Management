import mongoose from "mongoose";
import { Task } from "../models/Task.model.js";
import { User } from "../models/User.model.js";

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const { _id } = req.user;

    if (title === "" || _id === "") {
      return res.status(400).json({
        message: "title required",
      });
    }

    const newTask = await Task.create({ title });

    await User.findByIdAndUpdate(
      _id,
      {
        $push: { todos: newTask._id },
      },
      { new: true }
    );
    return res.status(200).json({
      message: "Task is create",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while create task",
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.body;
    const { _id } = req.user;

    await User.findByIdAndUpdate(
      _id,
      {
        $pull: { todos: taskId },
      },
      { new: true }
    );

    await Task.findByIdAndDelete(taskId);

    return res.status(200).json({
      message: "Task is delete",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while deleting task",
    });
  }
};

export const updateStatusOfTask = async (req, res) => {
  try {
    const { taskId, status } = req.body;

    await Task.findByIdAndUpdate(
      taskId,
      {
        status,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Task is update",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while updating task",
    });
  }
};
