const axios = require('axios');

const getNamedata = (async (req, res) => {
  const data = {
    op: "namedata_fetch",
    ndid: req.params.ndid
  }

  axios.post(process.env.FLOW_API, data)
    .then(({data}) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    })
});

const postNamedata = (async (req, res) => {
  const namedata = req.body;
  const data = {
    op: "namedata_store",
    namedata
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
  getNamedata,
  postNamedata
}