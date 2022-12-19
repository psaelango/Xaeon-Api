const express = require('express');
const router = express.Router();
const {
  getLabelGroup,
  postLabelGroup
} = require('../controllers/labelgroup.controller');

router.route('/labelgroup/:groupname').get(getLabelGroup);
router.route('/labelgroup').post(postLabelGroup);

module.exports = router;