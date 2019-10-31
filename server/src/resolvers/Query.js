const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function me(parent, args, context) {
  const userId = getUserId(context)
  return context.prisma.user({ id: userId })
}

module.exports = {
  me,
}
