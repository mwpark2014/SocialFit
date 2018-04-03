import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();
import passport from 'passport';
import passportService from '../config/passport';

passportService();

const requireAuth = passport.authenticate('jwt', { failWithError: true, session: false });

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Get posts filtered by target user
router.route('/posts/users/:target').get(PostController.getPostsByTargetUser);

// Add a new Post
router.post('/posts', requireAuth, PostController.addPost,
    PostController.authError);

// Delete a post by cuid
router.delete('/posts/:cuid', requireAuth, PostController.deletePost,
PostController.authError);

export default router;
