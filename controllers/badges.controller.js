const axios = require('axios');
const { getLabelGroup } = require('./labelgroup.controller');
const { getNamedata } = require('./namedata.controller');
const { getRelation } = require('./ndrelation.controller');

const getBadgesList = (async (req, res) => {
  const getLabelGroupReq = {
    params: {
      groupname: "badges"
    }
  }
  getLabelGroup(getLabelGroupReq, res);
});

const getSingleBadge = (async (req, res) => {
  const getNamedataReq = {
    params: {
      ndid: req.params.badgeId
    }
  }
  getNamedata(getNamedataReq, res);
});

const getUserBadges = (async (req, res) => {
  const getRelationReq = {
    params: {
      fromId: req.params.userId
    }
  }
  getRelation(getRelationReq, res);
});

module.exports = {
  getBadgesList,
  getSingleBadge,
  getUserBadges
}