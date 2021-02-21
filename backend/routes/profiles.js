const express = require('express');
const router = express.Router();
const storage = require('../helpers/storage');
const profileController = require('../controllers/profiles');

router.get('/',profileController.getProfiles);

router.post('/', storage, profileController.postProfile);

module.exports = router;