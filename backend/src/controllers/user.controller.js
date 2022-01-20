const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const { getAll, getOne, updateOne, deleteOne } = require("./crud.controller");
const { register } = require("./auth.controller");

router.get("/", getAll(User));
router.get("/:id", getOne(User));
router.patch("/:id", updateOne(User));
router.delete("/:id", deleteOne(User));


module.exports = router;
