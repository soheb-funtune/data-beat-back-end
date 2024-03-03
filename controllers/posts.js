const POSTS = require("../models/PostData");

exports.getAllPosts = async function (req, res, next) {
  console.log("getAllPosts");
  try {
    const { user_id } = req.query;
    const userCartItems = await POSTS.find();

    if (!userCartItems) {
      throw new Error("User not found");
      res.status(404).json({
        status: "not found",
        message: " User not found",
      });
    }

    res.status(200).json({
      data: {
        status: "Successful",
        message: " SucessFully",
        data: userCartItems,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// get Single post
exports.singlePost = async function (req, res, next) {
  console.log("singlePost", req.params.postId);
  try {
    let userCartItems = await POSTS.findById(req.params.postId);
    if (!userCartItems) {
      throw new Error("User not found");
      res.status(404).json({
        status: "not found",
        message: " User not found",
      });
    }

    res.status(200).json({
      data: {
        status: "Successful",
        message: "Post Created SucessFully",
        data: userCartItems,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// create posts
exports.createPost = async function (req, res, next) {
  console.log("createPost", req.body);
  try {
    let userCartItems = await POSTS.create(req.body);
    if (!userCartItems) {
      throw new Error("User not found");
      res.status(404).json({
        status: "not found",
        message: " User not found",
      });
    }

    res.status(200).json({
      data: {
        status: "Successful",
        message: "Post Created SucessFully",
        data: userCartItems,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// delete posts
exports.deletePost = async function (req, res, next) {
  console.log("deletePost", req.params.postId);
  try {
    let userCartItems = await POSTS.findByIdAndDelete(req.params.postId);
    if (!userCartItems) {
      throw new Error("User not found");
      res.status(404).json({
        status: "not found",
        message: " User not found",
      });
    }

    res.status(200).json({
      data: {
        status: "Successful",
        message: "Post Created SucessFully",
        data: userCartItems,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
