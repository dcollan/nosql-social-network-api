const router = require('express').Router();

// Utilize all routes
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
