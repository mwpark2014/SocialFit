import * as AuthenticationController from '../controllers/authentication';
import passport from 'passport';
import { Router } from 'express';

const requireLogin = passport.authenticate('local', { session: false });

const authRoutes = new Router();

// Auth Routes

// Registration route
authRoutes.post('/register', AuthenticationController.register);

// Login route
authRoutes.post('/login', requireLogin, AuthenticationController.login);

export default authRoutes;
