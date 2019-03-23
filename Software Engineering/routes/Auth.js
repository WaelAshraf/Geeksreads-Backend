
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User} = require('../models/User');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();




//Login Authentication
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({"ReturnMsg":error.details[0].message});

  let user = await User.findOne({ UserEmail: req.body.UserEmail });
  if (!user) return res.status(400).send({"ReturnMsg":"Invalid email or password."});
  if (!user.Confirmed) return res.status(401).send({ "ReturnMsg" :'Your account has not been verified.' });
  const validPassword = await bcrypt.compare(req.body.UserPassword, user.UserPassword);
  if (!validPassword) return res.status(400).send({"ReturnMsg":"Invalid email or password."});
  const token = user.generateAuthToken();
    res.send({
      "ReturnMsg": "Log in Successful.",
      "UserId": user.UserId,
      "Token":token});
});

function validate(req) {
  const schema = {
    UserEmail: Joi.string().min(5).max(255).required().email(),
    UserPassword: Joi.string().min(5).max(255).required()
  };

  return Joi.validate(req, schema);
}

module.exports = router;
