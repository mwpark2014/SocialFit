import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../config';
import setUserInfo from '../util/helpers';

function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 10080, // in seconds
  });
}

export function loginSucess(req, res, next) {
  const userInfo = setUserInfo(req);

  res.status(200).json({
    token: `JWT ${generateToken(userInfo)}`,
    user: userInfo,
  });
}

export function loginFail(err, req, res, next) {
  res.status(401).json({
    error: err.message,
  });
}

export function register(req, res, next) { // eslint-disable-line consistent-return
  const email = req.body.email;
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  if (!email) {
    return res.status(422).send({ error: 'You must enter an email address.' });
  }

  if (!name) {
    return res.status(422).send({ error: 'You must enter a name.' });
  }

  if (!password) {
    return res.status(422).send({ error: 'You must enter a password.' });
  }

  User.findOne({ username }, (err, existingUser) => { // eslint-disable-line consistent-return
    if (err) return next(err);

    // If user is not unique, return error
    if (existingUser) {
      return res.status(422).send({ error: 'Username already in use.' });
    }

    // If user is unique and pw provided, create account
    const user = new User({
      email,
      username,
      password,
      name,
    });

    user.save((err, user) => {
      if (err) return next(err);

      const userInfo = setUserInfo(user);

      res.status(201).json({
        token: `JWT ${generateToken(userInfo)}`,
        user: userInfo,
      });
    });
  });
}
