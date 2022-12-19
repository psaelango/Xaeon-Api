const axios = require('axios');

const getRelation = (async (req, res) => {
  const data = {
    op: "ndrelation_list",
    from_ndid: req.params.fromId
  }
  if (req.params.to) {
    data.to_ndid = req.params.toId
  }

  axios.post(process.env.FLOW_API, data)
    .then(({data}) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    })
});

const postRelation = (async (req, res) => {
  const { from_ndid, to_ndid, relation } = req.body;
  const data = {
    op: "ndrelation_store",
    from_ndid,
    to_ndid,
    relation
  }
  axios.post(process.env.FLOW_API, data)
    .then(({data}) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = {
  getRelation,
  postRelation
}