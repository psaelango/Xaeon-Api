const express = require('express');
const router = express.Router();
const {
  getNamedata,
  postNamedata
} = require('../controllers/namedata.controller');

/**
 * @swagger
 * /namedata/{ndid}:
 *   get:
 *     summary: Retrieve a single namedata
 *     description: Retrieve a single namedata contains properties which are predefined using mnic_store
 *     tags:
 *      - Flow Operations
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
*/
router.route('/namedata/:ndid').get(getNamedata);
router.route('/namedata').post(postNamedata);

module.exports = router;