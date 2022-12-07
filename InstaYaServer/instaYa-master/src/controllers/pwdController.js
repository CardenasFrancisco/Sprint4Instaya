const bcrypt = require('bcrypt')

// Encryptation functions, using bcrypt module

// Hash a String (password)
async function hashPassword (pwd) {
  return bcrypt.hash(pwd, 10)
}

// Validate hash to password
async function checkPassword (pwd1, bdPwd) {
  return bcrypt.compare(bdPwd, pwd1)
}

module.exports = { hashPassword, checkPassword }
