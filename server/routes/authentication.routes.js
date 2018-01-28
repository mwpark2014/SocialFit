import * as AuthenticationController from '../controllers/auth.controller';
import * as UserController from '../controllers/user.controller';
import passport from 'passport';
import { Router } from 'express';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { failWithError: true, session: false });

const apiRoutes = new Router();
const authRoutes = new Router();
const userRoutes = new Router();

export default function (app) {
  // Auth Routes

  // Set auth routes as subgroup/middleware to apiRoutes
  apiRoutes.use('/auth', authRoutes);

  // Registration route
  authRoutes.post('/register', AuthenticationController.register);

  // Login route
  authRoutes.post('/login', requireLogin, AuthenticationController.loginSucess,
    AuthenticationController.loginFail);

  // User Routes

  // Set user routes as a subgroup/middleware to apiRoutes
  apiRoutes.use('/user', userRoutes);

  // View user profile route
  userRoutes.get('/:userId', requireAuth); // ,UserController.viewProfile);

  // Test protected route
  apiRoutes.get('/protected', requireAuth, (req, res) => {
    res.send({ content: 'The protected test route is functional!' });
  });

  // Set url for API group routes
  app.use('/api', apiRoutes);
}
