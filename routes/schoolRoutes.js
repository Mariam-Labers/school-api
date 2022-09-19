const { createSchool, getSchools } = require("../controllers/schoolcontrollers")
const { Router } = require("express")


const router  = Router()
router.post("/addschool", createSchool)

router. route("/schools").get(getSchools)

module. exports = router