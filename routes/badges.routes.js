const express = require('express');
const router = express.Router();
const {
  getBadgesList,
  getSingleBadge,
  getUserBadges
} = require('../controllers/badges.controller');

router.route('/badges/list').get(getBadgesList);
router.route('/badges/:badgeId').get(getSingleBadge);
router.route('/badges/user/:userId').get(getUserBadges);

module.exports = router;