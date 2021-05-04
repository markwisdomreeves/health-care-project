
const Blogs = require("../models/blogModel");
const asyncHandler = require("express-async-handler");


const blogCtrl = {

    // @desc     Get all blog posts
    // @route    GET /api/blogs
    // @access   Public
    getBlogs: asyncHandler(async (req, res) => {
      try {
        const blogs = await Blogs.find({})
        res.json(blogs)
      } catch (err) {
        return res.status(500).json({msg: err.message})
      }
    }),

    // @desc     Get a single blog post
    // @route    GET /api/blog/:id
    // @access   Public
    getBlog: asyncHandler(async (req, res) => {
      try {
        const blog = await Blogs.findById(req.params.id);

        if (blog) {
          res.json(blog);
        } else {
          res.json({msg: "Blog post does not exist"})
        }
        } catch (err) {
          return res.status(500).json({msg: err.message})
       }
    }),

    // @desc    Create a blog post
    // @route   POST /api/create_blog
    // @access  Private/Admin
    createBlog: asyncHandler(async (req, res) => {
      try {
        const { title, description, name, image, avatar } = req.body;

        if (!name || !title || !description || !image || !avatar)
          return res.status(400).json({msg: "All fields are required"})

        const newBlog = new Blogs({
          user: req.user._id,
          title,
          description,
          name,
          image,
          avatar
        })

        await newBlog.save();

        res.json({msg: "Blog post created successfully"})

      } catch (err) {
        return res.status(500).json({msg: err.message})
      }
    }),

    // @desc    Update a blog post
    // @route   PUT /api/update_blog/:id
    // @access  Private/Admin
    updateBlog: asyncHandler(async (req, res) => {
      try {
        const {
          title,
          description,
          image,
          name,
          avatar
        } = req.body;

        const blog = await Blogs.findById(req.params.id);

        if (blog) {
          blog.title = title,
          blog.description = description,
          blog.image = image,
          blog.name = name,
          blog.avatar = avatar
          await blog.save()
          res.json({msg: "Blog post updated successfully"})
        } else {
          res.status(400).json({msg: "Blog does not exists."})
        }
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  }),

    // @desc    Delete a product
    // @route   DELETE /api/delete_blog/:id
    // @access  Private/Admin
    deleteBlog: asyncHandler(async (req, res) => {
      try {
        const blog = await Blogs.findById(req.params.id);
        if (blog) {
          await blog.remove()
          res.json({ mgs: "Blog post deleted successfully"})
        } else if(!blog) {
         return res.status(400).json({msg: "Blog does not exists."})
        }
      } catch (err) {
        return res.status(500).json({msg: err.message})
      }
  }),

}


module.exports = blogCtrl;
