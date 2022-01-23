const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secrets')

const tokenCreator = (user) => {
    const payload = {
      subject: user.id,
      username: user.username,
    }
    const options = {
      expiresIn: '1d',
    }
    return jwt.sign(payload, jwtSecret, options)
  }

  module.exports = tokenCreator