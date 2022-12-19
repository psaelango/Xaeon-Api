const axios = require('axios');

const postMnemonic = (async (req, res) => {
  const { name } = req.body;
  const data = {
    op: "mnic_store",
    name
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
  postMnemonic
}