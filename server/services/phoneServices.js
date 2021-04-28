const phoneModel = require("../models/phoneModel");

exports.getListPhone = async function getListPhone() {
  let fax = await phoneModel.find();
  return fax;
};
exports.getPhoneById = async function getPhoneById(id) {
    let fax = await phoneModel.findById(id);
    return fax;
  };
  