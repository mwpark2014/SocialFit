import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
  name: {
    type: 'String',
    required: true,
  },
  username: {
    type: 'String',
    lowercase: true,
    unique: true,
    required: true,
  },
  email: {
    type: 'String',
    lowercase: true,
    required: true,
  },
  password: {
    type: 'String',
    required: true,
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
},
{ timestamps: true }
);

// Pre-save of user to database, hash password
userSchema.pre('save', function (next) { // eslint-disable-line func-names, consistent-return
  const user = this;
  const SALT_FACTOR = 5;

  if (!user.isModified('password')) // eslint-disable-line curly
    return next();

  bcrypt.genSalt(SALT_FACTOR, (saltErr, salt) => {
    if (saltErr) return next(saltErr);
    bcrypt.hash(user.password, salt, (hashErr, hash) => {
      if (hashErr) return next(hashErr);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) { // eslint-disable-line func-names
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

export default mongoose.model('User', userSchema);
