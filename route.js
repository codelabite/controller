const express = require("express");
const router = express.Router();

//creating Router
const {
  getCodeLab,
  getCodeLabs,
  putCodeLab,
  postCodeLab,
  deleteCodeLab,
} = require("./controlRouter");

router.route("/").get(getCodeLabs).post(postCodeLab);

router.route("/:id").delete(deleteCodeLab).put(putCodeLab).get(getCodeLab);

module.exports = router;
