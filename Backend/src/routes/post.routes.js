const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage()})
const identifyUser = require("../middlewares/auth.middleware")


/**
 * @route POST /api/posts/ [Protected Route]
 * - req.body : { caption, imgUrl }
 * - response : created post object
 * - error response : 400 bad request, 401 unauthorized
 */
postRouter.post("/", upload.single("image"), identifyUser, postController.createPostController)


/**
 * @route GET /api/posts/ [Protected Route]
 * @description Get all the posts of the user and also the posts of the users followed by the user
 */
postRouter.get("/", identifyUser, postController.getPostController)

/**
 * @route GET /api/posts/details/:postId
 * @description return the details about specific post with the id and checks whether the posts requested
 * belongs to the requested user or not!
 */
postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController)


/**
 * @route POST /api/posts/like/:postid
 * @description like a post with the id provided in the requested params.
 */
postRouter.post("/like/:postId", identifyUser, postController.likePostController)


/**
 * @route GET /api/posts/feed
 * @description Get all the posts present in DB
 * @access private
 */
postRouter.get("/feed", identifyUser, postController.getFeedController)




module.exports = postRouter