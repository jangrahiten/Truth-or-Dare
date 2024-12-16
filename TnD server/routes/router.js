const express = require('express');
const get_response = require('../controllers/controller');
const app = express();
const router = express.Router();

router.post('/', get_response)

module.exports = router;