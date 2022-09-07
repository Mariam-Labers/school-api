const { Router } = require("express")
const { adduser } = require("../controllers/userController")


const router = Router();

router.route("/register").post(adduser)

module.exports =router