var express = require('express');
var router = express.Router();
var phoneController = require("../controllers/phoneController");

router.get("/fax", async function (req, res, next) {
  let fax = await phoneController.getListPhone();
  res.json(fax);
});

// GET detail
router.get("/fax/:id", async function (req, res, next) {
    let { id } = req.params;
    let fax = await phoneController.getPhoneById(id);
    res.json(fax);
  });
  
  
module.exports = router;
