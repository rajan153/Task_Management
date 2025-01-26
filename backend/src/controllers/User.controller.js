import { User } from "../models/User.model.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = await user.generateAccessToken();

    await user.save({ validateBeforeSave: false });

    return { accessToken };
  } catch (error) {
    throw Error("Something went wrong while generating tokens");
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (name === "" || email === "" || password === "") {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      return res.status(409).json({
        message: "User Already exists, please login",
      });
    }

    await User.create({
      email,
      name,
      password,
    });

    return res.status(200).json({
      message: "Registeration Successfull",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while registering",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === "" || password === "") {
      return res.status(404).json({
        message: "All fields required",
      });
    }

    const isUserExists = await User.findOne({ email });

    if (!isUserExists) {
      return res.status(404).json({
        message: "Account is not exists please first sign up",
      });
    }

    const isPasswordCorrect = await isUserExists.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Password is incorrect",
      });
    }

    const { accessToken } = await generateAccessAndRefreshTokens(
      isUserExists._id
    );

    isUserExists.password = null;

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res.status(200).cookie("accessToken", accessToken, options).json({
      message: "Login Successfully",
      user: isUserExists,
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while login",
    });
  }
};

export const fetchTask = async (req, res) => {
  try {
    const { _id } = req.user;
    const tasks = await User.findById(_id).populate("todos").exec();

    return res.status(200).json({
      message: "Fetch Tasks",
      tasks: tasks.todos,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while fetching task",
    });
  }
};
