
const router = require("express").Router();
const blogCtrl = require("../controllers/blogCtrl");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");


router.route('/blogs')
    .get(blogCtrl.getBlogs)
    .post(auth, authAdmin, blogCtrl.createBlog)

router.route('/blogs/:id')
    .get(blogCtrl.getBlog)
    .put(auth, authAdmin, blogCtrl.updateBlog)
    .delete(auth, authAdmin, blogCtrl.deleteBlog)


module.exports = router;
