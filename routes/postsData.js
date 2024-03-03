var express = require("express");
var router = express.Router();
const isAuthenticated = require("../middleware/auth-middleware");
const posts = require("../controllers/posts");

router.get("/posts", posts.getAllPosts);
router.get("/posts/:postId", posts.singlePost);
router.post("/posts", posts.createPost);
router.delete("/posts/:postId", posts.deletePost); // Specify the post ID in the URL

module.exports = router;
