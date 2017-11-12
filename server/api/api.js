const router = require('express').Router()

router.use('/users', require('./user/userRoutes'))
router.use('/projects', require('./projects/projectRoutes'))
router.use('/jobs', require('./job/jobRoutes'))

module.exports = router
