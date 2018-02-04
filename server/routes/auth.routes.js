import * as AuthenticationController from '../controllers/auth.controller';
import * as UserController from '../controllers/user.controller';
import passport from 'passport';
import { Router } from 'express';
import passportService from '../config/passport';

passportService();

const requireAuth = passport.authenticate('jwt', { failWithError: true, session: false });
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
  authRoutes.post('/login', requireLogin, AuthenticationController.loginSuccess,
    AuthenticationController.loginFail);

  // Test protected route
  authRoutes.get('/protected', requireAuth, AuthenticationController.authSuccess,
    AuthenticationController.authFail);

  // /////////////////// User Routes \\\\\\\\\\\\\\\\\\\\\

  // Set user routes as a subgroup/middleware to apiRoutes
  apiRoutes.use('/user', userRoutes);

  // View user profile route
  userRoutes.get('/:userId', requireAuth, UserController.viewProfile);

  // Set url for API group routes
  app.use('/api', apiRoutes);
}
