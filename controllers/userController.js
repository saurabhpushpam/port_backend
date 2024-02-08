const userproduct = require("../models/productModel");
const user = require("../models/userModel");
const path = require("path");
const fs = require("fs");
const bcryptjs = require('bcryptjs');


const register_user = async (req, res) => {


    try {

        const users = new user({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,


        });

        const user_data = await users.save();
        res.status(200).send({ success: true, data: user_data });


    }

    catch (error) {


        res.status(400).send(error.message);
    }
}




module.exports = {

    register_user,


}