// Set user info from request
export default function setUserInfo(request) {
  const getUserInfo = {
    _id: request._id,
    name: request.name,
    username: request.username,
    email: request.email,
  };

  return getUserInfo;
}

