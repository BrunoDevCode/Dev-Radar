"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _env = require("./config/env");

var app = (0, _express["default"])();
app.listen(_env.PORT, function () {
  console.log("> Server Running at ".concat(_env.PORT));
});