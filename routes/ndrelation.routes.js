const express = require('express');
const router = express.Router();
const {
  getRelation,
  postRelation
} = require('../controllers/ndrelation.controller');

router.route('/ndrelation/:fromId/:toId').get(getRelation);
router.route('/ndrelation').post(postRelation);

module.exports = router;