import Post from '../models/post';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

export function authError(err, req, res, next) { // eslint-disable-line no-unused-vars
  res.status(401).json({
    error: err.message,
  });
}

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getPosts(req, res) {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Get posts filtered by target user
 * @param req
 * @param res
 * @returns void
 */
export function getPostsByTargetUser(req, res) {
  Post.find({ target: req.params.target }).sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.author || !req.body.post.content || !req.body.post.target) {
    return res.status(403).end();
  }
  const userId = req.user.username;
  if (req.body.post.author !== userId) {
    return res.status(401).json({ error: 'You are not authorized to create this post.' });
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.author = sanitizeHtml(newPost.author);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.cuid = cuid();
  return newPost.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  const userId = req.user.username;
  if (req.body.post.author !== userId) {
    return res.status(401).json({ error: 'You are not authorized to create this post.' });
  }

  return Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
