const axios = require('axios');

const getLabelGroup = (async (req, res) => {
  const data = {
    op: "labelgroup_list",
    groupname: req.params.groupname
  }

  axios.post(process.env.FLOW_API, data)
    .then(({data}) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    })
});

const postLabelGroup = (async (req, res) => {
  const { groupname, name } = req.body;
  const data = {
    op: "labelgroup_store",
    groupname,
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
  getLabelGroup,
  postLabelGroup
}