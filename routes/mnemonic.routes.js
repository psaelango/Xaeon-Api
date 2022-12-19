const express = require('express');
const router = express.Router();
const {
  postMnemonic
} = require('../controllers/mnemonic.controller');

router.route('/mnic').post(postMnemonic);

module.exports = router;