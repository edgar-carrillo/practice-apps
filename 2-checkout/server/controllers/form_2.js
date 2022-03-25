const models = require('../models/models');

module.exports = {
  put: (req, res) => {
    models.form_2.updateUser(req.body, (err, response) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.send(response);
      }
    });
  }
};