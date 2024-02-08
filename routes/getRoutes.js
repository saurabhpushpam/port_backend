const express = require("express");
const get_route = express();

const user_controller = require("../controllers/userController");


const bodyParser = require("body-parser");
get_route.use(bodyParser.json());
get_route.use(bodyParser.urlencoded({ extended: true }));


get_route.post('/register', user_controller.register_user);

module.exports = get_route;
