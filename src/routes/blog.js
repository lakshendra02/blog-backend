const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Create a blog post
router.post('/', blogController.createBlog);

// Retrieve all blog posts
router.get('/', blogController.getAllBlogs);

// Retrieve a single blog post by ID
router.get('/:id', blogController.getBlogById);

// Update a blog post by ID
router.put('/:id', blogController.updateBlogById);

// Delete a blog post by ID
router.delete('/:id', blogController.deleteBlogById);

module.exports = router;
