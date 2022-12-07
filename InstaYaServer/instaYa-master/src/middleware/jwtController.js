const jwt = require('jsonwebtoken')

// Middleware function usign jwt auth

module.exports = function Auth (req, res, next) {
  const token = req.header('token')
  try {
    jwt.verify(token, process.env.TOKEN)
    next()
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' })
  }
}
