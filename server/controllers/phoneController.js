var phoneServices = require("../services/phoneServices");

exports.getListPhone = async function getListPhone() {
  return await phoneServices.getListPhone();
};
exports.getPhoneById = async function getPhoneById(id) {
  return await phoneServices.getPhoneById(id);
};
